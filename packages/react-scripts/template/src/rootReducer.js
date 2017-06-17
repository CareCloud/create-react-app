import { combineReducers } from 'redux-immutable';

import RootReducer from './modules/Root';

/**
 * Import all application redux reducers and combine them 
 * here. 
 * 
 */

const rootReducer = combineReducers({
  RootReducer,
});

export default rootReducer;
