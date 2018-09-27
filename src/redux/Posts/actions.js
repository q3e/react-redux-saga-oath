export const postsActionCreator = () => ({ type: 'FETCH_POSTS' })

export const savePostActionCreator = post => ({ type: 'SAVE_POST', post })

export const commentActionCreator = (value, wallId) => ({ type: 'SAVE_POST', value, wallId })
