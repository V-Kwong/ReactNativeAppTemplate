import {createSlice} from '@reduxjs/toolkit';

import {RootState} from './reduxStore';
import {ON_AUTH_ACTION} from '../utils/auth';
import {
  LOCAL_STORAGE_KEYS,
  getLocalStorageItem,
  setLocalStorageItem,
} from '../utils/localStorage';
import getGlobalStyles from '../utils/styles';

const initialState = {
  darkMode: false,
  globalStyles: getGlobalStyles(false),
};

export const stylesSlice = createSlice({
  name: 'styles',
  initialState: initialState,
  reducers: {
    toggleDarkMode: state => {
      state.darkMode = !state.darkMode;
      state.globalStyles = getGlobalStyles(state.darkMode);
      setLocalStorageItem(LOCAL_STORAGE_KEYS.DARK_MODE, state.darkMode);
    },
  },
  extraReducers: builder => {
    builder.addCase(ON_AUTH_ACTION, (state, action) => {
      let darkMode = action.payload
        ? getLocalStorageItem(LOCAL_STORAGE_KEYS.DARK_MODE, false)
        : false;
      state.darkMode = darkMode;
      state.globalStyles = getGlobalStyles(state.darkMode);
    });
  },
});

export const {toggleDarkMode} = stylesSlice.actions;

export const selectStyles = (state: RootState) => state.styles;
export const selectDarkMode = (state: RootState) => state.styles.darkMode;
export const selectGlobalStyles = (state: RootState) =>
  state.styles.globalStyles;

export default stylesSlice.reducer;
