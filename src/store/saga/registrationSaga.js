import * as types from '../actionTypes';
import {put, takeLatest} from 'redux-saga/effects';
import API from '../../utils/api';
import {TOAST_TYPE} from '../../utils/constants';

export default function* registrationSaga() {
  yield takeLatest(types.REGISTRATION_START, register);
}

function* register(action) {
  yield put({
    type: types.LOADER_START,
  });

  try {
    const result = yield new API().call({
      apiEndPoints: 'register',
      type: 'post',
      params: action.payload,
    });

    // console.log('sage result => ', result);
    yield put({
      type: types.SHOW_TOAST,
      payload: {
        message: 'Registration Successful',
        type: TOAST_TYPE.SUCCESS,
      },
    });

    yield put({
      type: types.REGISTRATION_START_SUCCESS,
      payload: result.data,
    });

    // yield put({
    //   type: types.REGISTRATION_START_FAIL,
    //   // payload: result.data,
    //   type: types.LOADER_STOP,
    // });
    yield put({
      type: types.LOADER_STOP,
    });
  } catch (error) {
    yield put({
      type: types.LOADER_STOP,
    });
    n;
    // console.log('sage error => ', error);
    yield put({
      type: types.SHOW_TOAST,
      payload: {
        message: error.message,
        type: TOAST_TYPE.ERROR,
      },
    });
  }
}
