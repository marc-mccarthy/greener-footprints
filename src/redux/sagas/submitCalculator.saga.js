import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

// Worker Saga: will be fired on 'SUBMIT_CALCULATOR' actions
function* submitCalculator(action) {
	try {
        console.log('CALCULATOR: ACTION.PAYLOAD', action.payload);
		const response = yield directionsService.route({
			origin: action.payload.startAddress,
			destination: action.payload.endAddress,
			provideRouteAlternatives: false,
			travelMode: 'DRIVING',
			unitSystem: google.maps.UnitSystem.IMPERIAL,
		});
        const distanceMiles = response.routes[0].legs[0].distance.value/1609.34;
        console.log('DISTANCE MILES',distanceMiles);
	    console.log('DURATION OF TRIP', response.routes[0].legs[0].duration.text);
        console.log('START ADDRESS', response.routes[0].legs[0].start_address);
        console.log('END ADDRESS', response.routes[0].legs[0].end_address);
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
        console.log(carbonApi.data);
	} catch (error) {
		console.log('Error in submitCalculatorSaga:', error);
	}
}

function* submitCalculatorSaga() {
	yield takeLatest('SUBMIT_CALCULATOR', submitCalculator);
}

export default submitCalculatorSaga;
