export const postsActionCreator = () => ({ type: 'FETCH_POSTS' })

export const savePostActionCreator = post => ({ type: 'SAVE_POST', post })

export const commentsActionCreator = (wallPostId) => ({ type: 'FETCH_COMMENTS', wallPostId })

export const commentActionCreator = (comment, wallPostId) => ({ type: 'SAVE_COMMENT', comment, wallPostId })
