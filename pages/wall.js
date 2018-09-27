import { Container } from 'reactstrap'

import Posts from 'src/containers/Posts'
import { postsActionCreator as posts } from 'src/redux/Posts/actions'

import '../src/assets/bootstrap.scss'

const Wall = () => pug`
  Container
    Posts
`


export default Wall
