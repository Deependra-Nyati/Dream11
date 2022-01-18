import * as types from '../actionTypes';

export const initRegistration = payload => ({
  type: types.REGISTRATION_START,
  payload,
});

// export const setUserData = payload => ({
//   type: types.SET_USER_DATA,
//   payload,
// });
