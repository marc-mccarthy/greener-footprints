import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "VEHICLE_MAKES_SAGA" actions
function* vehicles() {
	try {
        const vehicles = yield axios.get('/api/trips/carbon');
        console.log('VEHICLES DATA IN SAGA', vehicles.data)
        yield put({ type: 'VEHICLES', payload: vehicles.data });
	} catch (error) {
		console.log('Error in vehicles.saga:', error);
	}
}

function* vehiclesSaga() {
	yield takeLatest('VEHICLES_SAGA', vehicles);
}

export default vehiclesSaga;
