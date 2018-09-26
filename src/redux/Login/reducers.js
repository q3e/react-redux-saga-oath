const initialState = {
  isLoggingIn: false,
  submittedData: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUESTED':
      return {
        ...state,
        isLoggingIn: true,
        submittedData: false,
      }

    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoggingIn: false,
        submittedData: true,
      }

    case 'LOGIN_SUCCEEDED':
      return {
        ...state,
        isLoggingIn: false,
        submittedData: true,
      }

    default:
      return state
  }
}
