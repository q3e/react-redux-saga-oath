import axios from 'axios'
import moment from 'moment'


let authString

if(!(typeof window === 'undefined')){
  authString = `Bearer ${localStorage.getItem('access_token')}`
}

export const posts = () => axios({
  url: 'https://devapi.careerprepped.com/discussion/wall',
  headers: {
    Authorization: authString,
  }})
  .then(response => response.data)
  .catch(e => Promise.reject(e))

export default posts

export const savePost = post => axios({
  url: 'https://devapi.careerprepped.com/discussion/wall',
  method: 'post',
  headers: {
    Authorization: authString,
  },
  data: {
    post,
    permissions: 1, // not optional in API
  },
})
  .then(() => posts()) // return all posts instead of saved text
  .catch(e => Promise.reject(e))

export const saveComment = (comment, wall) => axios({
  url: 'https://devapi.careerprepped.com/discussion/wall_comment',
  method: 'post',
  headers: {
    Authorization: authString,
  },
  data: { comment, wall },
})
  .then(response => response.data)
  .catch(e => Promise.reject(e))

