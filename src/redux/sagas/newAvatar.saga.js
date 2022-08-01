import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "DELETE_TRIP_SAGA" actions
function* newAvatarSaga() {
	yield takeLatest('NEW_AVATAR_SAGA', newAvatar);
}

function* newAvatar(action) {
	try {
        console.log('NEW AVATAR SAGA ACTION.PAYLOAD:', action.payload)
        const response = yield axios.post('/api/user/avatar/', action.payload)
        console.log('fdsfsdfdss', response.data)
        yield put({ type: 'FETCH_USER' });
	} catch (error) {
		console.log('Error in newAvatarTrip.saga:', error);
	}
}

export default newAvatarSaga;
