import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on 'NEW_TRIP' actions
function* newTrip(action) {
	try {
        const config = {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		};
		console.log('NEW TRIP: ACTION.PAYLOAD', action.payload);
        // GOOGLE MAPS API REQUEST TO SERVER
        const startAddress = action.payload.startAddress.replaceAll(' ', '+');
		const endAddress = action.payload.endAddress.replaceAll(' ', '+');
        const directionsResponse = yield axios.post('/api/maps', {
            directionsUrl: `https://maps.googleapis.com/maps/api/directions/json?origin=${startAddress}&destination=${endAddress}&key=`
        });
        console.log('DIRECTIONS RESPONSE:', directionsResponse);

        // CARBON INTERFACE API RESPONSE TO SERVER
        const carbonResponse = yield axios({
            method: 'POST',
            url: '/api/carbon/estimate',
            data: {
                distance_value: directionsResponse.data.distance.value / 1609.34,
				vehicle_model_id: action.payload.model,
            }
        });
        console.log('CARBON RESPONSE:', carbonResponse);

        const newTrip = {
			startAddress: directionsResponse.data.start_address,
			endAddress: directionsResponse.data.end_address,
			distance: directionsResponse.data.distance.value / 1609.34,
			duration: directionsResponse.data.duration.text,
			passengers: action.payload.passengers,
			estimateId: carbonResponse.data.id,
			modelId:
				carbonResponse.data.attributes.vehicle_model_id,
			year: carbonResponse.data.attributes.vehicle_year,
			make: carbonResponse.data.attributes.vehicle_make,
			model: carbonResponse.data.attributes.vehicle_model,
			carbonPounds: carbonResponse.data.attributes.carbon_lb,
		};
        console.log('NEW TRIP:', newTrip);

		yield axios
			.post('/api/trips/newTrip', newTrip, config)
			.then(response => {
				console.log('RESPONSE FROM POST /api/trips/newTrip:', response);
			})
			.catch(error => {
				console.log('ERROR FROM POST /api/trips/newTrip:', error);
			});
            yield put({ type: 'GET_TRIPS_SAGA' });
	} catch (error) {
		console.log('Error in newTripSaga:', error);
	}
}

function* newTripSaga() {
	yield takeLatest('NEW_TRIP', newTrip);
}

export default newTripSaga;
