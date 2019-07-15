import {
  FETCH_EMPLOYEE_START,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
  SEND_COMMENT_SUCCESS,
} from '../actionTypes';

const initialState = {
  isFetching: false,
  hasError: false,
  employee: {
    address: '',
    comments: [],
    email: '',
    id: -1,
    name: '',
    photo: '',
    position: '',
  },
  errors: {},
};

export const employee = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_START:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        employee: {
          ...initialState.employee,
        },
        errors: {},
      };
    case FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        employee: action.payload,
        errors: {},
      };
    case FETCH_EMPLOYEE_FAIL:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        employee: {
          ...initialState.employee,
        },
        errors: action.payload,
      };

    case SEND_COMMENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        employee: action.payload,
        errors: {},
      };

    default:
      return state;
  }
};
