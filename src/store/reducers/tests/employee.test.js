import { initialState, employee } from '../employee';
import * as T from '../../actionTypes';

describe('Fetch employee', () => {
  test('Fetch employee start', () => {
    const action = {
      type: T.FETCH_EMPLOYEE_START,
    };

    expect(employee(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  test('Fetch employee success', () => {
    const action = {
      type: T.FETCH_EMPLOYEE_SUCCESS,
      payload: 'payload',
    };

    expect(employee(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      employee: action.payload,
    });
  });

  test('Fetch employee fail', () => {
    const action = {
      type: T.FETCH_EMPLOYEE_FAIL,
      payload: {},
    };

    expect(employee(initialState, action)).toEqual({
      ...initialState,
      hasError: true,
      isFetching: false,
      errors: action.payload,
    });
  });

  test('SEND_COMMENT_SUCCESS', () => {
    const action = {
      type: T.SEND_COMMENT_SUCCESS,
      payload: {},
    };

    expect(employee(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      employee: action.payload,
    });
  });
});
