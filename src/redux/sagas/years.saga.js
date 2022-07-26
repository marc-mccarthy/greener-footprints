import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "YEARS_SAGA" actions
function* yearsSaga() {
	yield takeLatest('YEARS_SAGA', years);
}

function* years(action) {
    try {
        const years = yield axios.post('/api/carbon/years', {make: action.payload.make});
        let responseYears = years.data.map(model => model.data.attributes.year);
		let uniqueYears = [...new Set(responseYears)];
        uniqueYears = uniqueYears.sort((a, b) => a - b);
        yield put({ type: 'YEARS', payload: uniqueYears });
	} catch (error) {
		console.log('Error in years.saga:', error);
	}
}

export default yearsSaga;
