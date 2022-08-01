import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* userSaga() {
	yield takeLatest('FETCH_USER', fetchUser);
}

function* fetchUser() {
	try {
		const config = {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		};
		const response = yield axios.get('/api/user', config);
		yield put({ type: 'SET_USER', payload: response.data });
	} catch (error) {
		console.log('User get request failed', error);
	}
}

export default userSaga;
