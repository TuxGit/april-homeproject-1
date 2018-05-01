import { takeLatest, call, put } from 'redux-saga/effects';
import { getTokenOwner } from '../api';
import { fetchRequest, fetchSuccess, fetchFailure } from '../ducks/users';

export function* fetchUserWatch() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow() {
  try {
    const response = yield call(getTokenOwner);
    yield put(fetchSuccess(response.data));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}
