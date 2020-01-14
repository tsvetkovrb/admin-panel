import { initialState, comments } from '../comments';
import * as T from '../../actionTypes';

describe('Sending comments', () => {
  test('Send comment start', () => {
    const action = {
      type: T.SEND_COMMENT_START,
    };

    expect(comments(initialState, action)).toEqual({
      ...initialState,
      isSending: true,
    });
  });

  test('Sending comments success', () => {
    const action = {
      type: T.SEND_COMMENT_SUCCESS,
    };

    expect(comments(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
    });
  });

  test('Sending comments fail', () => {
    const action = {
      type: T.SEND_COMMENT_FAIL,
      payload: {},
    };

    expect(comments(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
      hasError: true,
      errors: action.payload,
    });
  });
});
