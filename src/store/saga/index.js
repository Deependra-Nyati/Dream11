import {fork, all} from 'redux-saga/effects';
import loginSaga from './loginSaga';
import listSaga from './listSaga';
import registrationSaga from './registrationSaga';

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
  yield all([fork(listSaga)]);
  yield all([fork(registrationSaga)]);
}
