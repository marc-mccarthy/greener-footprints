import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

// Worker Saga: will be fired on 'SUBMIT_CALCULATOR' actions
function* submitCalculator(action) {
	try {
        console.log('CALCULATOR: ACTION.PAYLOAD', action.payload);
		const routeResponse = yield directionsService.route({
			origin: action.payload.startAddress,
			destination: action.payload.endAddress,
			provideRouteAlternatives: false,
            travelMode: 'DRIVING',
            drivingOptions: {
                departureTime: new Date(/* now, or future date */),
                trafficModel: 'bestguess',
            },
            unitSystem: google.maps.UnitSystem.IMPERIAL,
		});

        const carbonResponse = yield axios({
			method: 'POST',
			url: 'https://www.carboninterface.com/api/v1/estimates',
			headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer I72gDHzqfVLkuMsjO69Dg`,
			},
			data: {
				type: 'vehicle',
				distance_unit: 'mi',
				distance_value: routeResponse.routes[0].legs[0].distance.value/1609.34,
				vehicle_model_id: action.payload.vehicleModel,
			},
		});

        axios.post('/api/directions', {
			startAddress: routeResponse.routes[0].legs[0].start_address,
			startLat: routeResponse.routes[0].legs[0].start_location.lat,
			startLng: routeResponse.routes[0].legs[0].start_location.lng,
			endAddress: routeResponse.routes[0].legs[0].end_address,
			endLat: routeResponse.routes[0].legs[0].end_location.lat,
			endLng: routeResponse.routes[0].legs[0].end_location.lng,
			distanceMiles: routeResponse.routes[0].legs[0].distance.text,
			duration: routeResponse.routes[0].legs[0].duration.text,
			passengers: action.payload.passengers,
			vehicleId: action.payload.vehicleModel,
			routeResponse: routeResponse.routes[0],
			carbonResponse: carbonResponse.data.attributes,
		});
        console.log('ROUTE RESULT:', routeResponse);
        console.log('CARBON RESULT:', carbonResponse);
	} catch (error) {
		console.log('Error in submitCalculatorSaga:', error);
	}
}

function* submitCalculatorSaga() {
	yield takeLatest('SUBMIT_CALCULATOR', submitCalculator);
}

export default submitCalculatorSaga;
