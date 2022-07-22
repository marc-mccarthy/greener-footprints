import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on 'NEW_TRIP' actions
function* newTripSaga() {
	yield takeLatest('NEW_TRIP', newTrip);
}

function* newTrip(action) {
	try {
		console.log('NEW_TRIP_SAGA: ACTION.PAYLOAD', action.payload);
        const directionsService = new google.maps.DirectionsService();
		const directionsResponse = yield directionsService.route({
			origin: action.payload.startAddress,
			destination: action.payload.endAddress,
			travelMode: google.maps.TravelMode.DRIVING,
		});
        console.log('DIRECTIONS RESPONSE:', directionsResponse);
        yield put({ type: 'GET_MAP', payload: directionsResponse });

        // CARBON INTERFACE API RESPONSE TO SERVER
        const carbonResponse = yield axios({
            method: 'POST',
            url: '/api/carbon/estimate',
            data: {
                distance_value: directionsResponse.routes[0].legs[0].distance.value / 1609.34,
				vehicle_model_id: action.payload.model,
            }
        });
        console.log('CARBON RESPONSE:', carbonResponse);

        const newTrip = {
			startAddress: directionsResponse.routes[0].legs[0].start_address,
			endAddress: directionsResponse.routes[0].legs[0].end_address,
			distance: directionsResponse.routes[0].legs[0].distance.value / 1609.34,
			duration: directionsResponse.routes[0].legs[0].duration.text,
			passengers: action.payload.passengers,
			estimateId: carbonResponse.data.id,
			modelId:
				carbonResponse.data.attributes.vehicle_model_id,
			year: carbonResponse.data.attributes.vehicle_year,
			make: carbonResponse.data.attributes.vehicle_make,
			model: carbonResponse.data.attributes.vehicle_model,
			carbonPounds: carbonResponse.data.attributes.carbon_lb,
		};
        console.log('NEW TRIP TO SERVER:', newTrip);

		yield axios
			.post('/api/trips/newTrip', newTrip)
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

export default newTripSaga;
