import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on 'GET_MAP_SAGA' actions
function* getMapSaga() {
	yield takeLatest('GET_MAP_SAGA', getMap);
}

function* getMap(action) {
	try {
		console.log('GET_MAP_SAGA: ACTION.PAYLOAD', action.payload);
		const directionsService = new google.maps.DirectionsService();
		const directionsResponse = yield directionsService.route({
			origin: action.payload.startAddress,
			destination: action.payload.endAddress,
			travelMode: google.maps.TravelMode.DRIVING,
		});
		console.log('DIRECTIONS RESPONSE:', directionsResponse);
		yield put({ type: 'GET_MAP', payload: directionsResponse });
	} catch (error) {
		console.log('Error in getMapSaga:', error);
	}
}

export default getMapSaga;
