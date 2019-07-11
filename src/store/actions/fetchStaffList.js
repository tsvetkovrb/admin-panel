import { request } from 'api/client';

import {
  FETCH_STAFF_LIST_START,
  FETCH_STAFF_LIST_SUCCESS,
  FETCH_STAFF_LIST_FAIL,
} from '../actionTypes';

const fetchStaffListStart = () => ({
  type: FETCH_STAFF_LIST_START,
});
const fetchStaffListSuccess = payload => ({
  type: FETCH_STAFF_LIST_SUCCESS,
  payload,
});
const fetchStaffListFail = payload => ({
  type: FETCH_STAFF_LIST_FAIL,
  payload,
});

export const fetchStaffList = () => async (dispatch) => {
  dispatch(fetchStaffListStart());
  try {
    const response = await request.get('staff-list/');
    dispatch(fetchStaffListSuccess(response.data));
  } catch (error) {
    dispatch(fetchStaffListFail(error));
  }
};
