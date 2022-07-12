import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "VEHICLE_MAKES_SAGA" actions
function* getTrips(action) {
	try {
        let userId = action.payload.userId;
        const trips = yield axios.get(`/api/trips/${userId}`);
        console.log('TRIPS:', trips.data);
        yield put({ type: 'GET_TRIPS', payload: trips.data });
	} catch (error) {
		console.log('Error in getTrips.saga:', error);
	}
}

function* getTripsSaga() {
	yield takeLatest('GET_TRIPS_SAGA', getTrips);
}

export default getTripsSaga;
