import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "VEHICLE_MAKES_SAGA" actions
function* makesSaga() {
	yield takeLatest('MAKES_SAGA', makes);
}

function* makes() {
	try {
        const makes = yield axios.get('/api/trips/carbon/makes');
        console.log('MAKES IN SAGA', makes.data)
        yield put({ type: 'MAKES', payload: makes.data });
	} catch (error) {
		console.log('Error in makes.saga:', error);
	}
}

export default makesSaga;
