import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import _isEmpty from 'lodash'

import WallPostBox from 'src/components/TextBox'
import WallPost from 'src/components/WallPost'

import { savePostActionCreator as savePost } from 'src/redux/Posts/actions'


const Posts = props => pug`
  Container
    h1 Wall Posts

    if props.posts.length>0
      if props.posts.isFetching
        h3 Loading posts...

      each post, index in props.posts
        .text-center(key=index)
          WallPost(wallPost=post)

      WallPostBox(
        name="wallPost"
        action=savePost
        btnText="Add WallPost"
        label="add new Post"
        form="PostForm"
      )
`

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
}

export default Posts
