import { Card, CardText, Row } from 'reactstrap'

import CommentBox from 'src/components/TextBox'

import { commentActionCreator as comment } from 'src/redux/Posts/actions'

class WallPost extends React.Component {
  componentWillMount = () => {

  }
  render = () => pug`
    Container
      Card
        CardText props.wallPost

      Row
        .col-md-4.offset-md-8
          each comment, index in props.wallPost.comments
            Card(key=index)
              CardText comment

          CommentBox(action=comment wallId=this.props.wallPost.wallId)
`
}

export default WallPost
