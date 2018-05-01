import { combineReducers } from 'redux';
import { handleActions, createActions } from 'redux-actions';

const {
  user: { fetchRequest, fetchSuccess, fetchFailure },
} = createActions({
  USER: {
    FETCH_REQUEST: null,
    FETCH_SUCCESS: null,
    FETCH_FAILURE: null
  }
});

const isFetching = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [fetchRequest]: () => null,
    [fetchSuccess]: () => null,
    [fetchFailure]: (state, action) => action.payload
  },
  null
);

const result = handleActions(
  {
    [fetchRequest]: (state, action) => null,
    [fetchSuccess]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  error,
  result
});

export { fetchRequest, fetchSuccess, fetchFailure };

export const getIsFetching = state => state.users.isFetching;
export const getResult = state => state.users.result;
