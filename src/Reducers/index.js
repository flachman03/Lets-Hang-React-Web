import { combineReducers } from 'redux';
import { UserReducer } from './UserReducer'
import { LoadingReducer } from './LoadingReducer';
import { HasErroredReducer } from './ErrorReducer';

export const rootReducer = combineReducers({
  user: UserReducer,
  isLoading: LoadingReducer,
  error: HasErroredReducer
});

export default rootReducer;