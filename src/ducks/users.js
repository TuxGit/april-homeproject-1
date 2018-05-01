import { combineReducers } from 'redux';
import { handleActions, createActions } from 'redux-actions';

const {
  user: { getRequest, getSuccess, getFailure },
} = createActions({
  USER: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null
  }
});

const isFetching = handleActions(
  {
    [getRequest]: () => true,
    [getSuccess]: () => false,
    [getFailure]: () => false
  },
  false
);

const error = handleActions(
  {
    [getRequest]: () => null,
    [getSuccess]: () => null,
    [getFailure]: (state, action) => action.payload
  },
  null
);

const result = handleActions(
  {
    [getRequest]: (state, action) => null,
    [getSuccess]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  error,
  result
});

export { getRequest, getSuccess, getFailure };

export const getIsFetching = state => state.users.isFetching;
export const getResult = state => state.users.result;
