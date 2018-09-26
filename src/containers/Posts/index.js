import { connect } from 'react-redux'

import Posts from 'src/components/Posts'

const PostsContainer = props => pug`
  Posts(...props)
`

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps)(PostsContainer)
