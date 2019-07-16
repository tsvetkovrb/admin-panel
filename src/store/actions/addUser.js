import { request } from 'api/client';

import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from '../actionTypes';

const addUserStart = () => ({
  type: ADD_USER_START,
});

const addUserSuccess = payload => ({
  type: ADD_USER_SUCCESS,
  payload,
});

const addUserFail = payload => ({
  type: ADD_USER_FAIL,
  payload,
});

export const addUser = data => async (dispatch) => {
  dispatch(addUserStart());
  try {
    const response = await request.post('add-user/', data);
    const { data: payload } = response;
    dispatch(addUserSuccess(payload));
  } catch (error) {
    dispatch(addUserFail(error));
  }
};
