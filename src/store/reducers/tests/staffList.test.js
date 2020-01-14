import { initialState, staffList } from '../staffList';
import * as T from '../../actionTypes';

describe('Fetching staff list', () => {
  test('START', () => {
    const action = {
      type: T.FETCH_STAFF_LIST_START,
    };

    expect(staffList(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  test('SUCCESS', () => {
    const action = {
      type: T.FETCH_STAFF_LIST_SUCCESS,
      payload: [],
    };

    expect(staffList(initialState, action)).toEqual({
      ...initialState,
      staffList: action.payload,
      isFetching: false,
    });
  });

  test('FAIL', () => {
    const action = {
      type: T.FETCH_STAFF_LIST_FAIL,
      payload: {},
    };

    expect(staffList(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      hasError: true,
      errors: action.payload,
    });
  });

  test('Add user success', () => {
    const action = {
      type: T.ADD_USER_SUCCESS,
      payload: [],
    };

    expect(staffList(initialState, action)).toEqual({
      ...initialState,
      staffList: action.payload,
    });
  });
});
