import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import newTripSaga from './newTrip.saga';
import makesSaga from './makes.saga';
import yearsSaga from './years.saga';
import modelsSaga from './models.saga';
import getTripsSaga from './getTrips.saga';
import findTripSaga from './findTrip.saga';
import updateTripSaga from './updateTrip.saga';
import deleteTripSaga from './deleteTrip.saga';
import getMapSaga from './getMap.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
	yield all([
		loginSaga(), // login saga is now registered
		registrationSaga(),
		userSaga(),
		newTripSaga(),
        makesSaga(),
        yearsSaga(),
        modelsSaga(),
        getTripsSaga(),
        findTripSaga(),
        updateTripSaga(),
        deleteTripSaga(),
        getMapSaga(),
	]);
}
