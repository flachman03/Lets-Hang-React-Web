import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer'

export const rootReducer = combineReducers({
  user: UserReducer
});

export default rootReducer;