import { takeLatest, call, put } from 'redux-saga/effects';
import { getTokenOwner } from '../api';
import { getRequest, getSuccess, getFailure } from '../ducks/users';

export function* fetchUserWatch() {
  yield takeLatest(getRequest, fetchUserFlow);
}

export function* fetchUserFlow() {
  try {
    const response = yield call(getTokenOwner);
    yield put(getSuccess(response.data));
  } catch (error) {
    yield put(getFailure(error));
  }
}
