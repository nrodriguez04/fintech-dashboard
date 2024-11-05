import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess, loginFailure, LOGIN_REQUEST, LoginRequestAction } from '../actions/authActions';

function* loginSaga(action: LoginRequestAction): Generator {
  try {
    const response: { data: { token: string } } = yield call(axios.post, '/api/auth/login', action.payload);
    const token = response.data.token;
    yield put(loginSuccess(token));
    localStorage.setItem('token', token); // Store token in localStorage
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Login failed';
    yield put(loginFailure(errorMessage));
  }
}

export default function* authWatcherSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}