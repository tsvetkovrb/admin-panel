import {
  SEND_COMMENT_START,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAIL,
} from '../actionTypes';

export const initialState = {
  isSending: false,
  hasError: false,
  errors: {},
};

export const comments = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_COMMENT_START:
      return {
        ...state,
        isSending: true,
        hasError: false,
        errors: {},
      };

    case SEND_COMMENT_SUCCESS:
      return {
        ...state,
        isSending: false,
        hasError: false,
        errors: {},
      };

    case SEND_COMMENT_FAIL:
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
