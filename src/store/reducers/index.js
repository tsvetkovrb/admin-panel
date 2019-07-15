import { combineReducers } from 'redux';

import { staffList } from './staffList';
import { employee } from './employee';
import { comments } from './comments';

export const reducers = combineReducers({
  staffList,
  employee,
  comments,
});
