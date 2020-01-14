import { initialState, addUser } from '../addUser';
import * as T from '../../actionTypes';

describe('Add user tests', () => {
  test('Add user start', () => {
    const action = {
      type: T.ADD_USER_START,
    };

    expect(addUser(initialState, action)).toEqual({
      ...initialState,
      isSending: true,
    });
  });

  test('Add user success', () => {
    const action = {
      type: T.ADD_USER_SUCCESS,
    };

    expect(addUser(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
    });
  });

  test('Add user fail', () => {
    const action = {
      type: T.ADD_USER_FAIL,
      payload: {},
    };

    expect(addUser(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
      hasError: true,
      errors: action.payload,
    });
  });
});
