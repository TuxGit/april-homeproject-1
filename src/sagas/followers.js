import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserFollowers } from '../api';
import { fetchRequest, fetchSuccess, fetchFailure } from '../ducks/followers';
// import { getData } from '../ducks/users';

export function* fetchFollowersWatch () {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow (action) {
  try {
    // const user = yield select(getData);
    const response = yield call(getUserFollowers, action.payload);
    yield put(fetchSuccess(response.data));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}
