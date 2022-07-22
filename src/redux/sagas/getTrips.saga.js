import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "GET_TRIPS_SAGA" actions
function* getTripsSaga() {
	yield takeLatest('GET_TRIPS_SAGA', getTrips);
}

function* getTrips() {
    console.log('RUNNING GET TRIPS SAGA')
	try {
        const trips = yield axios.get(`/api/trips/getTrips`);
        yield put({ type: 'GET_TRIPS', payload: trips.data });
	} catch (error) {
		console.log('Error in getTrips.saga:', error);
	}
}

export default getTripsSaga;
