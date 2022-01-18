import * as types from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  loading: false,
  user: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REGISTRATION_START:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: true,
      };

    case types.REGISTRATION_START_SUCCESS:
      // AsyncStorage.setItem('userData', JSON.stringify(action.payload));
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        loading: false,
      };

    case types.REGISTRATION_START_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };

    // case types.LOGOUT:
    //   AsyncStorage.removeItem('userData');
    //   return {
    //     ...state,
    //     ...INITIAL_STATE,
    //     user: null,
    //   };

    default:
      return state;
  }
};
