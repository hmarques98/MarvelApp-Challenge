import { combineReducers } from '@reduxjs/toolkit';
import characterReducer from './slices/character';
const rootReducer = combineReducers({
  character: characterReducer,
});

export default rootReducer;
