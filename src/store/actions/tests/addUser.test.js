import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import { request } from 'api/client';

import { addUserStart, addUserSuccess, addUserFail, addUser } from '../addUser';
import * as T from '../../actionTypes';

const mockStore = configureMockStore([thunk]);

describe('Add user actions', () => {
  test('should return an object with type ADD_USER_START', () => {
    expect(addUserStart()).toEqual({
      type: T.ADD_USER_START,
    });
  });

  test('should return an object with type ADD_USER_SUCCESS and payload', () => {
    const payload = 'payload';

    expect(addUserSuccess(payload)).toEqual({
      type: T.ADD_USER_SUCCESS,
      payload,
    });
  });

  test('should return an object with type ADD_USER_FAIL and payload', () => {
    const payload = 'payload';

    expect(addUserFail(payload)).toEqual({
      type: T.ADD_USER_FAIL,
      payload,
    });
  });
});

describe('Async adding user to server', () => {
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

    const expectedActions = [addUserStart(), addUserSuccess({ data: 'data' })];
    const store = mockStore({});

    return store.dispatch(addUser()).then(() => {
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

    const expectedActions = [addUserStart(), addUserFail(errResp)];
    const store = mockStore({});

    return store.dispatch(addUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
