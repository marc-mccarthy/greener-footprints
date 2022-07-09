import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "VEHICLE_MODELS_SAGA" actions
function* vehicleModels(action) {
    console.log(action.payload)
	try {
        const vehicleModels = yield axios({
			method: 'GET',
			url: `https://www.carboninterface.com/api/v1/vehicle_makes/${action.payload.vehicleMake}/vehicle_models`,
			headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer I72gDHzqfVLkuMsjO69Dg`,
			},
		});
        let models = vehicleModels.data.map(model => {
            let year = action.payload.vehicleYear;
            if (model.data.attributes.year === year) {
                return model.data;
            }
        })
		// let uniqueModels = [...new Set(models)];
        yield put({ type: 'VEHICLE_MODELS', payload: models });
	} catch (error) {
		console.log('Error in vehicleMakes.saga:', error);
	}
}

function* vehicleModelsSaga() {
	yield takeLatest('VEHICLE_MODELS_SAGA', vehicleModels);
}

export default vehicleModelsSaga;
