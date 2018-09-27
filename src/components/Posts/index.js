import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import _isEmpty from 'lodash'

import WallPostBox from 'src/components/TextBox'
import WallPost from 'src/containers/WallPost'

import withAuth from 'src/lib/authHOC'

import {
  postsActionCreator as posts,
  savePostActionCreator as savePost,
} from 'src/redux/Posts/actions'

class Posts extends React.Component {
  componentWillMount = () => {
    this.props.dispatch(posts())
  }

  render = () => pug`
    Container
      h1 Wall Posts
      if _isEmpty(this.props.posts)
        h3 You have no posts

      each item, index in this.props.posts
        WallPost(key=index wallPost=item)

      .text-center
        WallPostBox(action=savePost)
  `
}

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withAuth(Posts)
