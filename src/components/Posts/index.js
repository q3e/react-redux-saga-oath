import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import _isEmpty from 'lodash'

import TextBox from 'src/components/TextBox'
import withAuth from 'src/lib/authHOC'

import { postsActionCreator as posts } from 'src/redux/Posts/actions'

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
        h1(key=index)= index

      .text-center
        TextBox
  `
}

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withAuth(Posts)
