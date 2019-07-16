import { combineReducers } from 'redux';

import { staffList } from './staffList';
import { employee } from './employee';
import { comments } from './comments';
import { addUser } from './addUser';

export const reducers = combineReducers({
  staffList,
  employee,
  comments,
  addUser,
});
