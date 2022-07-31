import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: will be fired on "DELETE_TRIP_SAGA" actions
function* newAvatarSaga() {
	yield takeLatest('NEW_AVATAR_SAGA', newAvatar);
}

function* newAvatar(action) {
	try {
        console.log('NEW AVATAR SAGA ACTION.PAYLOAD:', action.payload)
        yield axios.post('/api/user/avatar/', action.payload)
            .then(response => {
                console.log('POST AVATAR RESPONSE', response)
            })
            .catch(error => {
                console.log('POST AVATAR ERROR', error)
            })
	} catch (error) {
		console.log('Error in newAvatarTrip.saga:', error);
	}
}

export default newAvatarSaga;
