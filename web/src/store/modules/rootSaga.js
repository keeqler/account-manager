import { all } from 'redux-saga/effects';

import cart from './auth/sagas';

export default function*() {
  return yield all([cart]);
}
