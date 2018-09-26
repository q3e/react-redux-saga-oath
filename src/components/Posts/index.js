import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

import withAuth from 'src/lib/authHOC'

import { postsActionCreator as posts } from 'src/redux/Posts/actions'

class Posts extends React.Component {
  componentWillMount = () => {
    if(!(typeof window === 'undefined')){
      const accessToken = localStorage.getItem('access_token')
      this.props.dispatch(posts(accessToken))
    }
  }

  render = () => pug`
    Container
      h1 Wall Posts
      each item, index in this.props.posts
        h1(key=index)= index
  `
}

Posts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withAuth(Posts)
