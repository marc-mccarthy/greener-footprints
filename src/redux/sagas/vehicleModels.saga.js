import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "VEHICLE_MODELS_SAGA" actions
function* vehicleModels(action) {
    console.log('MODELS: ACTION.PAYLOAD', action.payload)
	try {
        const vehicleModels = yield axios({
			method: 'GET',
			url: `https://www.carboninterface.com/api/v1/vehicle_makes/${action.payload.vehicleMake}/vehicle_models`,
			headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer I72gDHzqfVLkuMsjO69Dg`,
			},
		});
        let models = vehicleModels.data.filter(model => {
            let year = action.payload.vehicleYear;
            if (model.data.attributes.year === year) {
                return model.data;
            }
        });
        let key = 'name'
        const uniqueModels = [
			...new Map(models.map(model => [model.data.attributes[key], model])).values(),
		];
        console.log('MODELS DATA IN SAGA', uniqueModels);
        yield put({ type: 'VEHICLE_MODELS', payload: uniqueModels });
	} catch (error) {
		console.log('Error in vehicleModels.saga:', error);
	}
}

function* vehicleModelsSaga() {
	yield takeLatest('VEHICLE_MODELS_SAGA', vehicleModels);
}

export default vehicleModelsSaga;
