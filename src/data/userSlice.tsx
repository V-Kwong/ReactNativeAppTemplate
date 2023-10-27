import {createSlice} from '@reduxjs/toolkit';

import {RootState} from './reduxStore';
import {ON_AUTH_ACTION} from '../utils/auth';
import {
  LOCAL_STORAGE_KEYS,
  removeLocalStorageItem,
  setLocalStorageItem,
} from '../utils/localStorage';

const initialState = null;

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: handleAuthChange,
  },
  extraReducers: builder => {
    builder.addCase(ON_AUTH_ACTION, handleAuthChange);
  },
});

function handleAuthChange(state, action) {
  if (!action.payload) {
    removeLocalStorageItem(LOCAL_STORAGE_KEYS.USER_ID);
    return initialState;
  }
  setLocalStorageItem(LOCAL_STORAGE_KEYS.USER_ID, action.payload.userID);
  // return updated value of redux slice
  // { userID, email, emailVerified }
  return action.payload;
}

export const {setUser} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user;
export const selectUserID = (state: RootState) => state.user.userID;

export default userSlice.reducer;
