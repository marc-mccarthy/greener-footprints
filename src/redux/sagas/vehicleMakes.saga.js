import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "GET_DIRECTIONS_SAGA" actions
function* vehicleMakes(action) {
	try {
        const vehicleMakes = yield axios({
			method: 'GET',
			url: 'https://www.carboninterface.com/api/v1/vehicle_makes',
			headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer I72gDHzqfVLkuMsjO69Dg`,
			},
		});
        yield put({ type: 'VEHICLE_MAKES', payload: vehicleMakes.data });
	} catch (error) {
		console.log('Error in vehicleMakes.saga:', error);
	}
}

function* vehicleMakesSaga() {
	yield takeLatest('VEHICLE_MAKES_SAGA', vehicleMakes);
}

export default vehicleMakesSaga;
