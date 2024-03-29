import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on 'UPDATE_TRIP_SAGA' actions
function* updateTripSaga() {
	yield takeLatest('UPDATE_TRIP_SAGA', updateTrip);
}

function* updateTrip(action) {
	try {
        // GOOGLE MAPS API REQUEST TO SERVER
        const directionsService = new google.maps.DirectionsService();
		const directionsResponse = yield directionsService.route({
			origin: action.payload.startAddress,
			destination: action.payload.endAddress,
			travelMode: google.maps.TravelMode.DRIVING,
		});

        // CARBON INTERFACE API RESPONSE TO SERVER
        const carbonResponse = yield axios({
            method: 'POST',
            url: '/api/carbon/estimate',
            data: {
                distance_value: directionsResponse.routes[0].legs[0].distance.value / 1609.34,
				vehicle_model_id: action.payload.model,
            }
        });

        const updateTrip = {
            id: action.payload.id,
			startAddress: directionsResponse.routes[0].legs[0].start_address,
			endAddress: directionsResponse.routes[0].legs[0].end_address,
			distance:
				directionsResponse.routes[0].legs[0].distance.value / 1609.34,
			duration: directionsResponse.routes[0].legs[0].duration.text,
			passengers: action.payload.passengers,
			estimateId: carbonResponse.data.id,
			modelId: carbonResponse.data.attributes.vehicle_model_id,
			year: carbonResponse.data.attributes.vehicle_year,
			make: carbonResponse.data.attributes.vehicle_make,
			model: carbonResponse.data.attributes.vehicle_model,
			carbonPounds: carbonResponse.data.attributes.carbon_lb,
		};

		axios
			.put('/api/trips/updateTrip', updateTrip)
			.then(() => {
			})
			.catch(error => {
				console.log('ERROR FROM POST /api/trips/updateTrip:', error);
			});
            yield put({ type: 'GET_MAP_SAGA', payload: updateTrip });
            yield put({ type: 'GET_TRIPS_SAGA' });
            yield put({ type: 'FIND_TRIP_SAGA', payload: action.payload.id });
	} catch (error) {
		console.log('Error in updateTripSaga:', error);
        yield put({ type: 'GET_TRIPS_SAGA' });
        yield put({ type: 'FIND_TRIP_SAGA', payload: action.payload.id });
        alert("No Available Route Found");
	}
}

export default updateTripSaga;
