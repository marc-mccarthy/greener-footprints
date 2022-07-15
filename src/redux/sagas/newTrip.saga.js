import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

// Worker Saga: will be fired on 'NEW_TRIP' actions
function* newTrip(action) {
	try {
		console.log('NEW TRIP: ACTION.PAYLOAD', action.payload);
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

        const newTrip = {
			startAddress: directionsResponse.data.start_address,
			endAddress: directionsResponse.data.end_address,
			distanceMiles: directionsResponse.data.distance.value / 1609.34,
			duration: directionsResponse.data.duration.text,
			passengers: action.payload.passengers,
			estimateId: carbonResponse.data.id,
			vehicleModelId:
				carbonResponse.data.attributes.vehicle_model_id,
			vehicleYear: carbonResponse.data.attributes.vehicle_year,
			vehicleMake: carbonResponse.data.attributes.vehicle_make,
			vehicleModel: carbonResponse.data.attributes.vehicle_model,
			carbonPounds: carbonResponse.data.attributes.carbon_lb,
			userId: action.payload.userId,
		};
        console.log('NEW TRIP:', newTrip);

		axios
			.post('/api/trips/newTrip', newTrip)
			.then(response => {
				console.log('RESPONSE FROM POST /api/trips:', response);
				put({ type: 'GET_TRIPS' });
			})
			.catch(error => {
				console.log('ERROR FROM POST /api/trips:', error);
			});



	} catch (error) {
		console.log('Error in newTripSaga:', error);
	}
}

function* newTripSaga() {
	yield takeLatest('NEW_TRIP', newTrip);
}

export default newTripSaga;
