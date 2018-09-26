import { call, put, takeLatest } from 'redux-saga/effects'
import _pick from 'lodash/pick'

import postsAPI from './api'

function* posts(action) {
   try {
      const posts = yield call(postsAPI, `Bearer ${action.accessToken}`)
      yield put({type: "FETCH_POSTS_SUCCEEDED", posts})
   } catch (e) {
      yield put({type: "FETCH_POSTS_FAILED", message: e.message})
   }
}

function* postsSaga() {
  yield takeLatest("FETCH_POSTS", posts)
}

export default postsSaga
