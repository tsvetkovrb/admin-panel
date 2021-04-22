import { takeEvery } from 'redux-saga/effects';

import { loadStaffList } from './staff';

import { FETCH_STAFF_LIST_START } from '../actionTypes';

export function* watchStaff() {
  yield takeEvery(FETCH_STAFF_LIST_START, loadStaffList);
}
