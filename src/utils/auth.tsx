import {createAction} from '@reduxjs/toolkit';

export const ON_AUTH_ACTION = createAction('onAuthAction');

export function isValidPassword(password: string) {
  return !!password && password.length >= 6;
}

export async function registerUser(email: string, password: string) {
  // TODO: register
  console.log('registerUser', email, password);
}

export async function signInUser(email: string, password: string) {
  // TODO: sign in
  console.log('signInUser', email, password);
}

export async function googleSignIn() {
  // TODO: googleSignIn
  console.log('googleSignIn');
}

export async function appleSignIn() {
  // TODO: appleSignIn
  console.log('appleSignIn');
}
