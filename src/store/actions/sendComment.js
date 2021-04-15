import { request } from 'api/client';

import {
  SEND_COMMENT_START,
  SEND_COMMENT_SUCCESS,
  SEND_COMMENT_FAIL,
} from '../actionTypes';

export const sendCommentStart = () => ({
  type: SEND_COMMENT_START,
});

export const sendCommentSuccess = (payload) => ({
  type: SEND_COMMENT_SUCCESS,
  payload,
});

export const sendCommentFail = (payload) => ({
  type: SEND_COMMENT_FAIL,
  payload,
});

export const sendComment = (data) => async (dispatch) => {
  dispatch(sendCommentStart());
  try {
    const response = await request.post('add-comment/', data);
    const { data: payload } = response;
    dispatch(sendCommentSuccess(payload));
  } catch (error) {
    dispatch(sendCommentFail(error));
  }
};
