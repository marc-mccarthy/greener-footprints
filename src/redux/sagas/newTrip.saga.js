import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

// Worker Saga: will be fired on 'SUBMIT_CALCULATOR' actions
function* newTrip(action) {
	try {
		console.log('NEW_TRIP: ACTION.PAYLOAD', action.payload);
        const startAddress = action.payload.startAddress.replaceAll(' ', '+');
		const endAddress = action.payload.endAddress.replaceAll(' ', '+');
        const directionsResponse = yield axios.post('/api/trips/maps', {
            directionsUrl: `https://maps.googleapis.com/maps/api/directions/json?origin=${startAddress}&destination=${endAddress}&key=`
        });



        const carbonResponse = yield axios.post('/api/trips/carbon', {
            data: {
				type: 'vehicle',
				distance_unit: 'mi',
				distance_value:
					directionsResponse.data.distance.value / 1609.34,
				vehicle_model_id: action.payload.vehicleModel,
			},
        });
        

        const newTrip = {
			startAddress: directionsResponse.data.start_address,
			endAddress: directionsResponse.data.end_address,
			distanceMiles: directionsResponse.data.distance.value / 1609.34,
			duration: directionsResponse.data.duration.text,
			passengers: action.payload.passengers,
			estimateId: carbonResponse.data.data.id,
			vehicleModelId:
				carbonResponse.data.data.attributes.vehicle_model_id,
			vehicleYear: carbonResponse.data.data.attributes.vehicle_year,
			vehicleMake: carbonResponse.data.data.attributes.vehicle_make,
			vehicleModel: carbonResponse.data.data.attributes.vehicle_model,
			carbonPounds: carbonResponse.data.data.attributes.carbon_lb,
			userId: action.payload.userId,
		};

		axios.post('/api/trips', newTrip).then(response => {
            console.log('RESPONSE FROM POST /api/trips:', response);
            put({ type: 'GET_TRIPS' });
        }).catch(error => {
            console.log('ERROR FROM POST /api/trips:', error);
        })

		console.log('DIRECTIONS RESULT:', directionsResponse);
		console.log('CARBON RESULT:', carbonResponse);
	} catch (error) {
		console.log('Error in submitCalculatorSaga:', error);
	}
}

function* newTripSaga() {
	yield takeLatest('SUBMIT_CALCULATOR', newTrip);
}

export default newTripSaga;
