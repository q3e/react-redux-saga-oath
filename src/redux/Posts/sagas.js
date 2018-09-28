import { call, put, takeLatest } from 'redux-saga/effects'
import _pick from 'lodash/pick'

import {
  posts as postsAPI,
  savePost as savePostAPI,
  saveComment as saveCommentAPI,
} from './api'

function* posts(action) {
   try {
      const posts = yield call(postsAPI)
      yield put({type: "FETCH_POSTS_SUCCEEDED", posts})
   } catch (e) {
      yield put({type: "FETCH_POSTS_FAILED", message: e.message})
   }
}

function* savePost(action) {
  try {
     const posts = yield call(savePostAPI, action.post)
     yield put({type: "SAVE_POST_SUCCEEDED"})
     yield put({type: "FETCH_POSTS"}) // fetch posts again because save API does not return posts
  } catch (e) {
     yield put({type: "SAVE_POST_FAILED", message: e.message})
  }
}

function* saveComment(action) {
  try {
     const posts = yield call(saveCommentAPI, { comment: action.comment, wall: action.wallPostId })
     yield put({type: "SAVE_COMMENT_SUCCEEDED" })
     yield put({type: "FETCH_POSTS"}) // fetch posts again because save API does not return posts
  } catch (e) {
     yield put({type: "SAVE_COMMENT_FAILED", message: e.message})
  }
}

export function* postsSaga() {
  yield takeLatest("FETCH_POSTS", posts)
}

export function* savePostSaga() {
  yield takeLatest("SAVE_POST", savePost)
}
export function* saveCommentSaga() {
  yield takeLatest("SAVE_COMMENT", saveComment)
}
