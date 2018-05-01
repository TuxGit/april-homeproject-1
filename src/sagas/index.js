import { fork } from 'redux-saga/effects';
import { authFlow } from './auth';
import { fetchUserWatch } from './users';

export default function*() {
  yield fork(authFlow);
  yield fork(fetchUserWatch);
}
