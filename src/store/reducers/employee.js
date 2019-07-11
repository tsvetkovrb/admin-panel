import {
  FETCH_EMPLOYEE_START,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
} from '../actionTypes';

const initialState = {
  isFetching: false,
  hasError: false,
  employee: {},
  errors: [],
};

export const employee = (store = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_START:
      return {
        isFetching: true,
        hasError: false,
        employee: {},
        errors: [],
      };
    case FETCH_EMPLOYEE_SUCCESS:
      return {
        isFetching: false,
        hasError: false,
        employee: action.payload,
        errors: [],
      };
    case FETCH_EMPLOYEE_FAIL:
      return {
        isFetching: false,
        hasError: true,
        employee: {},
        errors: action.payload,
      };

    default:
      return store;
  }
};
