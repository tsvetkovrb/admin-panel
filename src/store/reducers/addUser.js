import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from '../actionTypes';

export const initialState = {
  isSending: false,
  hasError: false,
  errors: {},
};

export const addUser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_START:
      return {
        ...state,
        isSending: true,
        hasError: false,
        errors: {},
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        isSending: false,
        hasError: false,
        errors: {},
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        isSending: false,
        hasError: true,
        errors: action.payload,
      };

    default:
      return state;
  }
};
