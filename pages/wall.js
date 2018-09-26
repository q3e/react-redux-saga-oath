import { Container } from 'reactstrap'

import Posts from 'src/containers/Posts'
import { postsActionCreator as posts } from 'src/redux/Posts/actions'


const Wall = () => pug`
  Container
    Posts
`

// Wall.getInitialProps = async ctx => {
//   if(!ctx.isServer){
//     console.log(ctx)
//     ctx.store.dispatch(posts(localStorage.getItem('access_token')))
//   }
// }
export default Wall
