import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "MODELS_SAGA" actions
function* models(action) {
	try {
		const models = yield axios.post('/api/trips/carbon/models', {make: action.payload.make});
		let responseModels = models.data.filter(model => {
            let year = action.payload.year;
            if (model.data.attributes.year === year) {
                return model.data;
            }
        });
        const uniqueModels = [
			...new Map(responseModels.map(model => [model.data.attributes['name'], model])).values(),
		];
        console.log('MODELS IN SAGA', uniqueModels);
        yield put({ type: 'MODELS', payload: uniqueModels });
	} catch (error) {
		console.log('Error in models.saga:', error);
	}
}

function* modelsSaga() {
	yield takeLatest('MODELS_SAGA', models);
}

export default modelsSaga;
