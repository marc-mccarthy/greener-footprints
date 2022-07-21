import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on 'FIND_TRIP_SAGA' actions
function* findTrip(action) {
	console.log('FIND_TRIP_SAGA: ACTION.PAYLOAD', action.payload);
	try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        const findTrip = yield axios.get(`/api/trips/findTrip/${action.payload}`, config);
        yield put({ type: 'FIND_TRIP', payload: findTrip.data });
	} catch (error) {
		console.log('Error in findTrip.saga:', error);
	}
}

function* findTripSaga() {
	yield takeLatest('FIND_TRIP_SAGA', findTrip);
}

export default findTripSaga;
