import { call, put, takeLatest } from 'redux-saga/effects'
import _pick from 'lodash/pick'

import loginAPI from './api'

// main worker saga - fired on LOGIN_REQUESTED action
function* login(action) {
   try {
      const session = yield call(loginAPI, _pick(action, ['email', 'password']))
      console.log('session', session)
      yield put({type: "LOGIN_SUCCEEDED", session})
   } catch (e) {
      yield put({type: "LOGIN_FAILED", message: e.message})
   }
}

// 'takeLatest' does not allow concurrent login requests
function* loginSaga() {
  yield takeLatest("LOGIN_REQUESTED", login)
}

export default loginSaga
