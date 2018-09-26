const initialState = {
  isLoggingIn: false,
  userId: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUESTED':
      return {
        ...state,
        isLoggingIn: true,
      }

    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoggingIn: false,
      }

    case 'LOGIN_SUCCEEDED':
      return {
        ...state,
        isLoggingIn: false,
        userId: action.session.user_id
      }

    default:
      return state
  }
}
