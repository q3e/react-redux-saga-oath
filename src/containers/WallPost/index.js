import { connect } from 'react-redux'

import WallPost from 'src/components/WallPost'

const WallPostContainer = props => pug`
  WallPost(...props)
`

const mapStateToProps = state => ({
  wallPost: state.posts.posts
})

export default connect(null)(WallPostContainer)
