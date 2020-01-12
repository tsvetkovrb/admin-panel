import {
  fetchStaffListStart,
  fetchStaffListSuccess,
  fetchStaffListFail,
} from '../fetchStaffList';

import * as T from '../../actionTypes';

describe('Add user actions', () => {
  test('should return an object with type FETCH_STAFF_LIST_START', () => {
    expect(fetchStaffListStart()).toEqual({
      type: T.FETCH_STAFF_LIST_START,
    });
  });

  test('should return an object with type FETCH_STAFF_LIST_SUCCESS and payload', () => {
    const payload = 'payload';

    expect(fetchStaffListSuccess(payload)).toEqual({
      type: T.FETCH_STAFF_LIST_SUCCESS,
      payload,
    });
  });

  test('should return an object with type FETCH_STAFF_LIST_FAIL and payload', () => {
    const payload = 'payload';

    expect(fetchStaffListFail(payload)).toEqual({
      type: T.FETCH_STAFF_LIST_FAIL,
      payload,
    });
  });
});
