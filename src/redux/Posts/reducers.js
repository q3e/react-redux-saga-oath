const initialState = {
  isfetching: false,
  posts: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
    case 'SAVE_POST':
      return {
        ...state,
        isfetching: true,
      }

    case 'FETCH_POSTS_FAILED':
    case 'SAVE_POST_FAILED':
      return {
        ...state,
        isfetching: false,
      }

    case 'FETCH_POSTS_SUCCEEDED':
    case 'SAVE_POST_SUCCEEDED':
      return {
        ...state,
        isfetching: false,
        posts: action.posts._embedded.wall,
      }

    default:
      return state
  }
}
