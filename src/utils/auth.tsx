import {createAction} from '@reduxjs/toolkit';

export const ON_AUTH_ACTION = createAction('onAuthAction');

export function isValidPassword(password: string) {
  return !!password && password.length >= 6;
}

