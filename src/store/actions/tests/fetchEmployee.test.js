import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

import { request } from 'api/client';

import {
  fetchEmployeeStart,
  fetchEmployeeSuccess,
  fetchEmployeeFail,
  fetchEmployee,
} from '../fetchEmployee';
import * as T from '../../actionTypes';

const mockStore = configureMockStore([thunk]);

describe('Add user actions', () => {
  test('should return an object with type FETCH_EMPLOYEE_START', () => {
    expect(fetchEmployeeStart()).toEqual({
      type: T.FETCH_EMPLOYEE_START,
    });
  });

  test('should return an object with type FETCH_EMPLOYEE_SUCCESS and payload', () => {
    const payload = 'payload';

    expect(fetchEmployeeSuccess(payload)).toEqual({
      type: T.FETCH_EMPLOYEE_SUCCESS,
      payload,
    });
  });

  test('should return an object with type FETCH_EMPLOYEE_FAIL and payload', () => {
    const payload = 'payload';

    expect(fetchEmployeeFail(payload)).toEqual({
      type: T.FETCH_EMPLOYEE_FAIL,
      payload,
    });
  });
});

describe('Async fetching current employee from server', () => {
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

    const expectedActions = [
      fetchEmployeeStart(),
      fetchEmployeeSuccess({ data: 'data' }),
    ];
    const store = mockStore({});

    return store.dispatch(fetchEmployee()).then(() => {
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

    const expectedActions = [fetchEmployeeStart(), fetchEmployeeFail(errResp)];
    const store = mockStore({});

    return store.dispatch(fetchEmployee()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
