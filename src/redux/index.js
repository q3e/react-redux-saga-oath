import { all, call } from 'redux-saga/effects'

import loginReducer from './Login/reducers'
import loginSaga from './Login/sagas'

import postsReducer from './Posts/reducers'
import { postsSaga, savePostSaga, saveCommentSaga } from './Posts/sagas'

export default {
  reducers: {
    login: loginReducer,
    posts: postsReducer,
  },
  sagas: function* sagas() {
    yield all([
      call(loginSaga),
      call(postsSaga),
      call(savePostSaga),
      call(saveCommentSaga),
    ])
  },
}
