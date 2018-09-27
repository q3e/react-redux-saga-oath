export const postsActionCreator = () => ({ type: 'FETCH_POSTS' })

export const savePostActionCreator = post => ({ type: 'SAVE_POST', post })

export const commentsActionCreator = (wallPostId) => ({ type: 'FETCH_COMMENTS', wallPostId })

export const commentActionCreator = (value, wallPostId) => ({ type: 'SAVE_COMMENT', value, wallPostId })
