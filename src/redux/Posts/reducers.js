const initialState = {
  isSaving: false,
  isFetching: false,
  posts: [], // TODO: Normalize- map comments to posts
}

export default (state = initialState, action) => {
  switch (action.type) {
    // FETCH POSTS
    case 'FETCH_POSTS':
      return {
        ...state,
        isFetching: true,
      }

    case 'FETCH_POSTS_FAILED':
      return {
        ...state,
        isFetching: false,
      }


    case 'FETCH_POSTS_SUCCEEDED':
      return {
        ...state,
        isFetching: false,
        posts: [ ...action.posts._embedded.wall ],
      }

    // SAVE POST
    case 'SAVE_POST':
      return {
        ...state,
        isSaving: true,
      }

    case 'SAVE_POST_FAILED':
      return {
        ...state,
        isSaving: false,
      }

    case 'SAVE_POST_SUCCEEDED':
      return {
        ...state,
        isSaving: false,
      }

    // FETCH COMMENTS
    case 'FETCH_COMMENTS':
      return {
        ...state,
        isFetching: true,
      }

    case 'FETCH_COMMENTS_FAILED':
      return {
        ...state,
        isFetching: false,
      }


    case 'FETCH_COMMENTS_SUCCEEDED':
      return {
        ...state,
        isFetching: false,
        posts: [ ...action.posts._embedded.wall ],
      }

    // SAVE COMMENT
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
