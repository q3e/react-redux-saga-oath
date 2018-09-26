import { call, put, takeLatest } from 'redux-saga/effects'
import _pick from 'lodash/pick'

import loginAPI from './api'

// main worker saga - fired on LOGIN_REQUESTED action
function* login(action) {
  console.log(_pick(action, ['email', 'password']))
   try {
      const user = yield call(loginAPI, _pick(action, ['email', 'password']))
      yield put({type: "LOGIN_SUCCEEDED", user: user})
   } catch (e) {
      yield put({type: "LOGIN_FAILED", message: e.message})
   }
}

// 'takeLatest' does not allow concurrent login requests
function* loginSaga() {
  yield takeLatest("LOGIN_REQUESTED", login)
}

export default loginSaga
