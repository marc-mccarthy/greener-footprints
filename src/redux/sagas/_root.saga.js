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
import newAvatarSaga from './newAvatar.saga';

export default function* rootSaga() {
	yield all([
		loginSaga(),
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
        newAvatarSaga(),
	]);
}
