import {configureStore} from '@reduxjs/toolkit';

import stylesReducer from './stylesSlice';
import userReducer from './userSlice';

const reduxStore = configureStore({
  reducer: {
    styles: stylesReducer,
    user: userReducer,
  },
});

export default reduxStore;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
