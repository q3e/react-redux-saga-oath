import axios from 'axios'

const login = credentials => axios({
  url: 'https://devapi.careerprepped.com/oauth',
  method: 'post',
  data: {
    ...credentials,
    grant_type: 'password',
    client_id: 'careerprepped'
  }})
  .then(function (response) {
    console.log(response);
  })
  .catch(e => Promise.reject(e));

export default login
