import moment from 'moment'
import { connect } from 'react-redux'

import Posts from 'src/components/Posts'

import { postsActionCreator as posts } from 'src/redux/Posts/actions'

class PostsContainer extends React.Component {
  state = {
    isTokenExpired: true,
  }

  componentWillMount = () => {
    this.props.dispatch(posts())
    // make route private
    if (typeof localStorage !== 'undefined'){
      const tokenExpiry = Number(localStorage.getItem('token_expiry'))
      if(tokenExpiry > moment.now()) {
        this.setState({ isTokenExpired: false })
      }
    }
  }

  render = () => pug`
    if this.state.isTokenExpired
      h1 Loggin in...If it takes too long, login again!

    else
      Posts(...this.props)
  `
}

const mapStateToProps = state => ({
  posts: state.posts.posts.entities,
  isFetching: state.posts.posts.isFetching,
})

export default connect(mapStateToProps)(PostsContainer)
