import {configureStore} from '@reduxjs/toolkit';

import stylesReducer from './stylesSlice';

const reduxStore = configureStore({
  reducer: {
    styles: stylesReducer,
  },
});

export default reduxStore;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
