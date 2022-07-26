import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "MODELS_SAGA" actions
function* modelsSaga() {
	yield takeLatest('MODELS_SAGA', models);
}

function* models(action) {
	try {
		const models = yield axios.post('/api/carbon/models', {make: action.payload.make});
		let responseModels = models.data.filter(model => {
            let year = action.payload.year;
            if (model.data.attributes.year === year) {
                return model.data;
            }
        });
        const uniqueModels = [
			...new Map(responseModels.map(model => [model.data.attributes['name'], model])).values(),
		];
        yield put({ type: 'MODELS', payload: uniqueModels });
	} catch (error) {
		console.log('Error in models.saga:', error);
	}
}

export default modelsSaga;
