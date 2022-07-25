import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on 'FIND_TRIP_SAGA' actions
function* findTripSaga() {
	yield takeLatest('FIND_TRIP_SAGA', findTrip);
}

function* findTrip(action) {
	console.log('FIND_TRIP_SAGA: ACTION.PAYLOAD', action.payload);
	try {
        const findTrip = yield axios.get(`/api/trips/findTrip/${action.payload}`);
        yield put({ type: 'GET_MAP_SAGA', payload: { startAddress: findTrip.data.startAddress, endAddress: findTrip.data.endAddress } });
        yield put({ type: 'FIND_TRIP', payload: findTrip.data });
	} catch (error) {
		console.log('Error in findTrip.saga:', error);
	}
}



export default findTripSaga;
