import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "VEHICLE_MAKES_SAGA" actions
function* getTrips() {
	try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const trips = yield axios.get(`/api/trips/`, config);
        yield put({ type: 'GET_TRIPS', payload: trips.data });
	} catch (error) {
		console.log('Error in getTrips.saga:', error);
	}
}

function* getTripsSaga() {
	yield takeLatest('GET_TRIPS_SAGA', getTrips);
}

export default getTripsSaga;
