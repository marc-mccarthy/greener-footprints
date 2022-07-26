import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "MAKES_SAGA" actions
function* makesSaga() {
	yield takeLatest('MAKES_SAGA', makes);
}

function* makes() {
	try {
        const makes = yield axios.get('/api/carbon/makes');
        yield put({ type: 'MAKES', payload: makes.data });
	} catch (error) {
		console.log('Error in makes.saga:', error);
	}
}

export default makesSaga;
