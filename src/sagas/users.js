import { takeLatest, call, put } from 'redux-saga/effects';
import { getTokenOwner, getUserInformation } from '../api';
import { fetchRequest, fetchSuccess, fetchFailure } from '../ducks/users';

export function* fetchUserWatch () {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow (action) {
  try {
    let response = null;
    if (action.payload) {
      response = yield call(getUserInformation, action.payload);
    } else {
      response = yield call(getTokenOwner);
    }
    yield put(fetchSuccess(response.data));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}
