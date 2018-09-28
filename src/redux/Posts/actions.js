export const postsActionCreator = () => ({ type: 'FETCH_POSTS' })

export const savePostActionCreator = post => ({ type: 'SAVE_POST', post })

export const commentActionCreator = (comment, wallPostId) => ({ type: 'SAVE_COMMENT', comment, wallPostId })

