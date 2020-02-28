import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';
import { showMessage, showLoading, hideLoading } from '../form/actions';

export function* signUp({ payload }) {
  const { email, password } = payload;

  try {
    yield put(showLoading());
    yield call(api.post, 'users', { email, password });
    yield put(hideLoading());
    yield put(
      showMessage('Successfully registered! Redirecting to login page...'),
    );

    setTimeout(() => history.push('/'), 3300);
  } catch ({ response: { data: responseData } }) {
    yield put(hideLoading());
    yield put(showMessage(responseData.error.msg, true));
  }
}

export function* signIn({ payload }) {
  const { email, password } = payload;
  try {
    yield put(showLoading());

    const { token } = (yield call(api.post, 'sessions', {
      email,
      password,
    })).data;

    yield put(hideLoading());
    yield put(signInSuccess(token, email.split('@')[0]));

    history.push('/dashboard');
  } catch ({ response: { data } }) {
    yield put(hideLoading());
    yield put(showMessage(data.error.msg, true));
  }
}

export function signOut() {
  history.push('/');
}

export function* forgotPassword({ payload }) {
  const { email } = payload;

  try {
    yield put(showLoading());
    yield call(api.post, `password_recovery/${email}`);
    yield put(hideLoading());
    yield put(showMessage('A code has been sent to your e-mail address'));

    setTimeout(() => history.push(`/passwordreset/${email}`), 3300);
  } catch ({ response: { data: responseData } }) {
    yield put(hideLoading());
    yield put(showMessage(responseData.error.msg, true));
  }
}

export function* passwordReset({ payload }) {
  const { code, email, password } = payload;

  try {
    yield put(showLoading());
    yield call(api.put, `password_recovery/${email}`, {
      token: code,
      password,
    });
    yield put(hideLoading());
    yield put(
      showMessage('Password successfully reset! Redirecting to login page...'),
    );

    setTimeout(() => history.push('/'), 3300);
  } catch ({ response: { data: responseData } }) {
    yield put(hideLoading());
    yield put(showMessage(responseData.error.msg, true));
  }
}

export default all([
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/FORGOT_PASSWORD', forgotPassword),
  takeLatest('@auth/PASSWORD_RESET', passwordReset),
]);
