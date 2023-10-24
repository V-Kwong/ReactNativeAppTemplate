import {MMKV} from 'react-native-mmkv';

export const localStorage = new MMKV();

export const LOCAL_STORAGE_KEYS = {
  USER_ID: 'userID',

  DARK_MODE: 'darkMode',

  ONBOARD_STEP: 'onboardStep',

  FCM_TOKEN: 'fcmToken',

  CACHED_DYNAMIC_LINK: 'cachedDynamicLink',

  //ANNOUNCEMENT KEYS
  LAST_ANNOUNCEMENT_ID: 'lastAnnouncementID',
  LAST_ANNOUNCEMENT_MESSAGE: 'lastAnnouncementMessage',
};

export function doesLocalStorageContain(key: string): boolean {
  return localStorage.contains(key);
}

export function setLocalStorageItem(key: string, value: any) {
  return localStorage.set(key, JSON.stringify(value));
}

export function getLocalStorageItem(key: string, defaultValue: any): any {
  let result = localStorage.getString(key);
  if (result) {
    return JSON.parse(result);
  }
  return defaultValue;
}

export function removeLocalStorageItem(key: string) {
  localStorage.delete(key);
}
