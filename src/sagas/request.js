import { call, put, select } from 'redux-saga/effects';
import { getIsNetworkErrorPresent, addError, clearError } from 'ducks/network';
import { logout } from 'ducks/auth';

export default function* (fn, args) {
  try {
    const response = yield call(fn, args);
    const isNetworkErrorPresent = yield select(getIsNetworkErrorPresent);
    if (isNetworkErrorPresent) {
      yield put(clearError());
    }
    return response;
  } catch (error) {
    yield put(addError(error));
    if (error.response.status === 401) yield put(logout());

    throw error;
  }
}
