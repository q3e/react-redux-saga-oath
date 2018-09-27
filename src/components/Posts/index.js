import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import _isEmpty from 'lodash'

import WallPostBox from 'src/components/TextBox'
import WallPost from 'src/containers/WallPost'

import { savePostActionCreator as savePost } from 'src/redux/Posts/actions'


const Posts = props =>pug`
  Container
    h1 Wall Posts

    if props.posts.length>0
      if props.posts.isFetching
        h3 Loading posts...

      each item, index in props.posts
        .text-center(key=index)
          WallPost(wallPost=item)
      WallPostBox(
        action=savePost
        btnText="Add WallPost"
        label="add new comment"
        form="PostForm"
      )
`

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Posts
