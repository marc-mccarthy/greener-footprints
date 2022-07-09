import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
const directionsService = new google.maps.DirectionsService();

// worker Saga: will be fired on "GET_DIRECTIONS_SAGA" actions
function* sendDirections(action) {
	try {
		const response = yield directionsService.route({
			origin: action.payload.startAddress,
			destination: action.payload.endAddress,
			provideRouteAlternatives: false,
			travelMode: action.payload.vehicle,
			unitSystem: google.maps.UnitSystem.IMPERIAL,
		});
        const distanceMiles = response.routes[0].legs[0].distance.value/1609.34;
        console.log(distanceMiles);
	    const duration = response.routes[0].legs[0].duration.text;
        const startAddress = response.routes[0].legs[0].start_address;
        const endAddress = response.routes[0].legs[0].end_address;
        const carbonApi = yield axios({
			method: 'POST',
			url: 'https://www.carboninterface.com/api/v1/estimates',
			headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer I72gDHzqfVLkuMsjO69Dg`,
			},
			data: {
				type: 'vehicle',
				distance_unit: 'mi',
				distance_value: distanceMiles,
				vehicle_model_id: '7268a9b7-17e8-4c8d-acca-57059252afe9',
			},
		});
        console.log(carbonApi.data.data.attributes);
	} catch (error) {
		console.log('Error in sendDirectionsSaga:', error);
	}
}

function* sendDirectionsSaga() {
	yield takeLatest('SEND_DIRECTIONS_SAGA', sendDirections);
}

export default sendDirectionsSaga;
