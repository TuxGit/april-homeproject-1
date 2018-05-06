import { combineReducers } from 'redux';
import { handleActions, createActions } from 'redux-actions';

const {
  network: { addError, clearError },
} = createActions({
  NETWORK: {
    ADD_ERROR: null,
    CLEAR_ERROR: null
  }
});

const error = handleActions(
  {
    [addError]: (state, action) => action.payload,
    [clearError]: () => null
  },
  null
);

const message = handleActions(
  {
    [addError]: (state, action) => {
      let message = 'Непредвиденная ошибка';
      const response = action.payload.response;

      if (response && response.data) {
        message = response.data.message || message;
      }
      return message;
    },
    [clearError]: () => null
  },
  null
);

export default combineReducers({
  error,
  message
});

export { addError, clearError };

export const getIsNetworkErrorPresent = state => (state.network.error !== null);
export const getErrorMessage = state => state.network.message;
