import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

// Worker Saga: will be fired on 'SUBMIT_CALCULATOR' actions
function* newTrip(action) {
	try {
		console.log('CALCULATOR: ACTION.PAYLOAD', action.payload);
		const routeResponse = yield directionsService.route({
			origin: action.payload.startAddress,
			destination: action.payload.endAddress,
			provideRouteAlternatives: false,
			travelMode: 'DRIVING',
			drivingOptions: {
				departureTime: new Date(),
				trafficModel: 'bestguess',
			},
			unitSystem: google.maps.UnitSystem.IMPERIAL,
		});

		const carbonResponse = yield axios({
			method: 'POST',
			url: 'https://www.carboninterface.com/api/v1/estimates',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer I72gDHzqfVLkuMsjO69Dg`,
			},
			data: {
				type: 'vehicle',
				distance_unit: 'mi',
				distance_value:
					routeResponse.routes[0].legs[0].distance.value / 1609.34,
				vehicle_model_id: action.payload.vehicleModel,
			},
		});

        const newTrip = {
            startAddress: routeResponse.routes[0].legs[0].start_address,
			endAddress: routeResponse.routes[0].legs[0].end_address,
			distanceMiles:
				routeResponse.routes[0].legs[0].distance.value / 1609.34,
			duration: routeResponse.routes[0].legs[0].duration.text,
			passengers: action.payload.passengers,
			estimateId: carbonResponse.data.data.id,
			vehicleModelId:
				carbonResponse.data.data.attributes.vehicle_model_id,
			vehicleYear: carbonResponse.data.data.attributes.vehicle_year,
			vehicleMake: carbonResponse.data.data.attributes.vehicle_make,
			vehicleModel: carbonResponse.data.data.attributes.vehicle_model,
			carbonPounds: carbonResponse.data.data.attributes.carbon_lb,
            userId: action.payload.userId,
        }

		axios.post('/api/trips', newTrip).then(response => {
            console.log('RESPONSE FROM POST /api/trip:', response);
            // put({ type: 'GET_TRIPS' });
        }).catch(error => {
            console.log('ERROR FROM POST /api/trip:', error);
        })

		console.log('ROUTE RESULT:', routeResponse);
		console.log('CARBON RESULT:', carbonResponse);
	} catch (error) {
		console.log('Error in submitCalculatorSaga:', error);
	}
}

function* newTripSaga() {
	yield takeLatest('SUBMIT_CALCULATOR', newTrip);
}

export default newTripSaga;
