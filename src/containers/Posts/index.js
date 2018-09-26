import { connect } from 'react-redux'

import Posts from 'src/components/Posts'

const mapStateToProps = state => ({
  posts: state.posts.posts
})


export default connect(mapStateToProps)(Posts)
