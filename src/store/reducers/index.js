import { combineReducers } from 'redux';

import { staffList } from './staffList';
import { employee } from './employee';

export const reducers = combineReducers({
  staffList,
  employee,
});
