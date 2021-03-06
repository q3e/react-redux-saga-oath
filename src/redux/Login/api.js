import axios from 'axios'
import moment from 'moment'

const login = credentials => axios({
  url: 'https://devapi.careerprepped.com/oauth',
  method: 'post',
  data: {
    ...credentials,
    grant_type: 'password',
    client_id: 'careerprepped'
  }})
  .then(function ({ data }) {
    localStorage.setItem('access_token', data.access_token)
    localStorage.setItem('user_id', data.user_id)
    localStorage.setItem('token_expiry', moment.now() + data.expires_in)
    return data
  })
  .catch(e => Promise.reject(e))

export default login
