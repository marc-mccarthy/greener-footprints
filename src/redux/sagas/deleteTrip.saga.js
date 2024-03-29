import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "DELETE_TRIP_SAGA" actions
function* deleteTripSaga() {
	yield takeLatest('DELETE_TRIP_SAGA', deleteTrip);
}

function* deleteTrip(action) {
	try {
        yield axios.delete(`/api/trips/${action.payload}`)
            .then(response => {
                console.log('DELETE TRIP RESPONSE', response)
            })
            .catch(error => {
                console.log('DELETE TRIP ERROR', error)
            })
        yield put({ type: 'GET_TRIPS_SAGA' });

	} catch (error) {
		console.log('Error in deleteTrip.saga:', error);
	}
}

export default deleteTripSaga;
