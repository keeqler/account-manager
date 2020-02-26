import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';
import { showMessage, showLoading, hideLoading } from '../form/actions';

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

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
