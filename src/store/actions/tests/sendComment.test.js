import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import { request } from 'api/client';

import {
  sendCommentStart,
  sendCommentSuccess,
  sendCommentFail,
  sendComment,
} from '../sendComment';

import * as T from '../../actionTypes';

const mockStore = configureMockStore([thunk]);

describe('Add user actions', () => {
  test('should return an object with type SEND_COMMENT_START', () => {
    expect(sendCommentStart()).toEqual({
      type: T.SEND_COMMENT_START,
    });
  });

  test('should return an object with type SEND_COMMENT_SUCCESS and payload', () => {
    const payload = 'payload';

    expect(sendCommentSuccess(payload)).toEqual({
      type: T.SEND_COMMENT_SUCCESS,
      payload,
    });
  });

  test('should return an object with type SEND_COMMENT_FAIL and payload', () => {
    const payload = 'payload';

    expect(sendCommentFail(payload)).toEqual({
      type: T.SEND_COMMENT_FAIL,
      payload,
    });
  });
});

describe('Async sending comment to employee', () => {
  beforeEach(() => {
    moxios.install(request);
  });

  afterEach(() => {
    moxios.uninstall(request);
  });

  test('should return an array with expected successful actions and payload', () => {
    moxios.wait(() => {
      const moxiosRequest = moxios.requests.mostRecent();
      moxiosRequest.respondWith({ response: { data: 'data' }, status: 200 });
    });

    const expectedActions = [sendCommentStart(), sendCommentSuccess({ data: 'data' })];
    const store = mockStore({});

    return store.dispatch(sendComment()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  test('should return an array with expected unsuccessful actions and payload', () => {
    const errResp = {
      data: 'data',
    };

    moxios.wait(() => {
      const moxiosRequest = moxios.requests.mostRecent();
      moxiosRequest.reject(errResp);
    });

    const expectedActions = [sendCommentStart(), sendCommentFail(errResp)];
    const store = mockStore({});

    return store.dispatch(sendComment()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
