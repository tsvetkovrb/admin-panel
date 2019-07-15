import {
  SEND_COMMENT_START,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAIL,
} from '../actionTypes';

const initialState = {
  isSending: false,
  hasError: false,
  errors: {},
};

export const comments = (store = initialState, action) => {
  switch (action.type) {
    case SEND_COMMENT_START:
      return {
        isSending: true,
        hasError: false,
        errors: {},
      };

    case SEND_COMMENT_SUCCESS:
      return {
        isSending: false,
        hasError: false,
        errors: {},
      };

    case SEND_COMMENT_FAIL:
      return {
        isSending: false,
        hasError: true,
        errors: action.payload,
      };

    default:
      return store;
  }
};
