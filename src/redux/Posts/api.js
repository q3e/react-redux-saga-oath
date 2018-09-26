import axios from 'axios'
import moment from 'moment'

const posts = authorization => axios({
  url: 'https://devapi.careerprepped.com/discussion/wall',
  headers: {
    Authorization: authorization,
  }})
  .then(response => response.data)
  .catch(e => Promise.reject(e))

export default posts
