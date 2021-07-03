import {combineReducers} from '@reduxjs/toolkit';
import userData from '../src/Features/User/slice';
import splash from '../src/Features/Splash/slice';

const rootReducer = combineReducers({
  userData,
  splash,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
