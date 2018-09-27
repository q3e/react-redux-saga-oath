const initialState = {
  isfetching: false,
  posts: [], // TODO: Normalize- map comments to posts
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        isfetching: true,
      }

    case 'SAVE_POST':
      return {
        ...state,
        isSaving: true,
      }

    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        isfetching: false,
      }

    case 'SAVE_POST_FAILED':
      return {
        ...state,
        isSaving: false,
      }

    case 'FETCH_POSTS_SUCCEEDED':
      return {
        ...state,
        isfetching: false,
        posts: action.posts._embedded.wall,
      }

    case 'SAVE_POST_SUCCEEDED':
      return {
        ...state,
        isSaving: false,
      }

    case 'SAVE_COMMENT':
      return {
        ...state,
        isSaving: true,
      }

    case 'SAVE_COMMENT_FAILED':
      return {
        ...state,
        isSaving: false,
      }

    case 'SAVE_COMMENT_SUCCEEDED':
      return {
        ...state,
        isSaving: false,
        posts: action.posts._embedded.wall_comment,
      }

  default:
      return state
  }
}
