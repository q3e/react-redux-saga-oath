import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

import { PostsActionCreator as posts } from 'src/redux/Login/actions'

class Posts extends React.Component {
  componentWillMount = () => {
    if(!(typeof window === 'undefined')){
      const access_token = localStorage.getItem('access_token')
      this.props.dispatch({ type: 'FETCH_POSTS', access_token })
    }
    console.log(this.props)
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

export default Posts
