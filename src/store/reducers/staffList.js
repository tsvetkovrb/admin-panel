import {
  FETCH_STAFF_LIST_START,
  FETCH_STAFF_LIST_SUCCESS,
  FETCH_STAFF_LIST_FAIL,
} from '../actionTypes';

const initialState = {
  isFetching: false,
  hasError: false,
  staffList: [],
  errors: {},
};

export const staffList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STAFF_LIST_START:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        staffList: [],
        errors: {},
      };
    case FETCH_STAFF_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        staffList: action.payload,
        errors: {},
      };
    case FETCH_STAFF_LIST_FAIL:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        staffList: [],
        errors: action.payload,
      };

    default:
      return state;
  }
};
