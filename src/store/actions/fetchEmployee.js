import { request } from 'api/client';

import {
  FETCH_EMPLOYEE_START,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
} from '../actionTypes';

const fetchEmployeeStart = () => ({
  type: FETCH_EMPLOYEE_START,
});

const fetchEmployeeSuccess = payload => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  payload,
});

const fetchEmployeeFail = payload => ({
  type: FETCH_EMPLOYEE_FAIL,
  payload,
});

export const fetchEmployee = id => async (dispatch) => {
  dispatch(fetchEmployeeStart());
  try {
    const response = await request.get(`staff-list/${id}`);
    dispatch(fetchEmployeeSuccess(response.data));
  } catch (error) {
    dispatch(fetchEmployeeFail(error));
  }
};
