import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getUserFollowers } from '../api';
import { fetchRequest, fetchSuccess, fetchFailure } from '../ducks/followers';
import { getResult } from '../ducks/users';

export function* fetchFollowersWatch() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow() {
  try {
    const user = yield select(getResult);
    const response = yield call(getUserFollowers, user.login);
    yield put(fetchSuccess(response.data));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}
