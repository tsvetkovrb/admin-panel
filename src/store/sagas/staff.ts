import { put } from 'redux-saga/effects';

import { request } from 'api/client';

import {
  fetchStaffListSuccess,
  fetchStaffListFail,
} from 'store/actions/fetchStaffList';

export function* loadStaffList() {
  try {
    const response = yield request.get('staff-list/');
    yield put(fetchStaffListSuccess(response.data));
  } catch (error) {
    yield put(fetchStaffListFail(error));
  }
}
