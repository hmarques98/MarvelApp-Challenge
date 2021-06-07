import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import characterReducer from './slices/character';
const rootReducer = combineReducers({
  auth: authReducer,
  character: characterReducer,
});

export default rootReducer;
