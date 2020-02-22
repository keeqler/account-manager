import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const { error, token } = (yield call(api.post, 'sessions', {
    email,
    password,
  })).data;

  if (!error) {
    yield put(signInSuccess(token, email.split('@')[0]));

    history.push('/dashboard');
  } else {
    // dispatch failure action
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
