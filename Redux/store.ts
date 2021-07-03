import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';

import rootReducer, {RootState} from './rootReducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({immutableCheck: true})],
});
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
