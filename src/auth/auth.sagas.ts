import {
   put, 
   takeLatest } from 'redux-saga/effects';


import * as actions from './auth.actions';


function* loginSaga() {
  try {
    yield console.log('login')
    yield put(actions.login.success());
  } catch (ex) {
    console.error(ex);
  }
}

export default function*() {
  yield takeLatest(actions.login.request, loginSaga);
 
}
