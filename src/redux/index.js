import { all, call } from 'redux-saga/effects'

import loginReducer from './Login/reducers'

import loginSaga from './Login/sagas'

export default {
  reducers: { login: loginReducer },
  sagas: function* sagas() {
    yield all([
      call(loginSaga),
    ])
  },
}
