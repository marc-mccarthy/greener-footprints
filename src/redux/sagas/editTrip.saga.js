import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();

// Worker Saga: will be fired on 'EDIT_TRIP_SAGA' actions
function* editTrip(action) {
	console.log('EDIT_TRIP_SAGA: ACTION.PAYLOAD', action.payload);
	try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const editTrip = yield axios.get(`/api/trips/editTrip/${action.payload}`, config);
        yield put({ type: 'EDIT_TRIP', payload: editTrip.data });
	} catch (error) {
		console.log('Error in editTrip.saga:', error);
	}
}

function* editTripSaga() {
	yield takeLatest('EDIT_TRIP_SAGA', editTrip);
}

export default editTripSaga;
