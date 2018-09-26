export const formActionCreator = ({ email, password }) => {
  return ({ type: 'LOGIN_REQUESTED', email, password })
}
