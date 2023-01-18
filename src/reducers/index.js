import { combineReducers, } from 'redux';

// import { AUTH_STATE, AuthReducer } from './AuthReducer';
import { SystemReducer, SYSTEM_STATE } from './SystemReducer';

export const reducer = combineReducers({
  [SYSTEM_STATE]: SystemReducer,
  // [AUTH_STATE]: AuthReducer,
});