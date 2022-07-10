import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "VEHICLE_MODELS_SAGA" actions
function* vehicleYears(action) {
    console.log('YEARS: ACTION.PAYLOAD', action.payload)
	try {
        const vehicleYears = yield axios({
			method: 'GET',
			url: `https://www.carboninterface.com/api/v1/vehicle_makes/${action.payload}/vehicle_models`,
			headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer I72gDHzqfVLkuMsjO69Dg`,
			},
		});
        let years = vehicleYears.data.map(model => model.data.attributes.year);
        console.log('YEARS DATA IN SAGA', years)
		let uniqueYears = [...new Set(years)];
        console.log('UNIQUE YEARS DATA SORTED IN SAGA', uniqueYears.sort((a, b) => a - b));
        yield put({ type: 'VEHICLE_YEARS', payload: uniqueYears });
	} catch (error) {
		console.log('Error in vehicleYears.saga:', error);
	}
}

function* vehicleYearsSaga() {
	yield takeLatest('VEHICLE_YEARS_SAGA', vehicleYears);
}

export default vehicleYearsSaga;
