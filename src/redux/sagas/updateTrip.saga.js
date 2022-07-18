import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

// Worker Saga: will be fired on 'NEW_TRIP' actions
function* updateTrip(action) {
	try {
		console.log('UPDATE TRIP: ACTION.PAYLOAD', action.payload);
        // GOOGLE MAPS API REQUEST TO SERVER
        const startAddress = action.payload.startAddress.replaceAll(' ', '+');
		const endAddress = action.payload.endAddress.replaceAll(' ', '+');
        const directionsResponse = yield axios.post('/api/trips/maps', {
            directionsUrl: `https://maps.googleapis.com/maps/api/directions/json?origin=${startAddress}&destination=${endAddress}&key=`
        });
        console.log('DIRECTIONS RESPONSE:', directionsResponse);

        // CARBON INTERFACE API RESPONSE TO SERVER
        const carbonResponse = yield axios({
            method: 'POST',
            url: '/api/trips/carbon/estimate',
            data: {
                distance_value: directionsResponse.data.distance.value / 1609.34,
				vehicle_model_id: action.payload.model,
            }
        });
        console.log('CARBON RESPONSE:', carbonResponse);

        const updateTrip = {
            id: action.payload.id,
			startAddress: directionsResponse.data.start_address,
			endAddress: directionsResponse.data.end_address,
			distance: directionsResponse.data.distance.value / 1609.34,
			duration: directionsResponse.data.duration.text,
			passengers: action.payload.passengers,
			estimateId: carbonResponse.data.id,
			modelId:
				carbonResponse.data.attributes.vehicle_model_id,
			carbonPounds: carbonResponse.data.attributes.carbon_lb,
		};
        console.log('UPDATE TRIP:', updateTrip);

		axios
			.put('/api/trips/updateTrip', updateTrip)
			.then(response => {
				console.log('RESPONSE FROM POST /api/trips/updateTrip:', response);
			})
			.catch(error => {
				console.log('ERROR FROM POST /api/trips/updateTrip:', error);
			});
            yield put({ type: 'GET_TRIPS_SAGA' });
	} catch (error) {
		console.log('Error in updateTripSaga:', error);
	}
}

function* updateTripSaga() {
	yield takeLatest('UPDATE_TRIP_SAGA', updateTrip);
}

export default updateTripSaga;
