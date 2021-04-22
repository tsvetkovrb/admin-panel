import { request } from 'api/client';
import { Dispatch } from 'redux';

import {
  FETCH_EMPLOYEE_START,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
} from '../actionTypes';

export const fetchEmployeeStart = () => ({
  type: FETCH_EMPLOYEE_START,
});

export const fetchEmployeeSuccess = (payload: any) => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  payload,
});

export const fetchEmployeeFail = (payload: any) => ({
  type: FETCH_EMPLOYEE_FAIL,
  payload,
});

export const fetchEmployee = (id: string) => async (dispatch: Dispatch) => {
  dispatch(fetchEmployeeStart());
  try {
    const response = await request.get(`staff-list/${id}`);
    dispatch(fetchEmployeeSuccess(response.data));
  } catch (error) {
    dispatch(fetchEmployeeFail(error));
  }
};
