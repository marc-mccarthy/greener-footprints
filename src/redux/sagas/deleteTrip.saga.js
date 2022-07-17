import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import getTripsSaga from './getTrips.saga';

// Worker Saga: will be fired on "DELETE_TRIP_SAGA" actions
function* deleteTrip(action) {
    console.log('DELETE: ACTION.PAYLOAD', action.payload);
	try {
        yield axios.delete(`/api/trips/${action.payload.id}`)
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

function* deleteTripSaga() {
	yield takeLatest('DELETE_TRIP_SAGA', deleteTrip);
}

export default deleteTripSaga;
