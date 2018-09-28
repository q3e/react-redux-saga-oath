import { Container, Card, CardText, Row } from 'reactstrap'

import CommentBox from 'src/components/TextBox'

import { commentActionCreator as comment } from 'src/redux/Posts/actions'

class WallPost extends React.Component {
  render = () => pug`
    Container.my-5
      Card.border.border-dark-rounded
        CardText Post |
          h3= this.props.wallPost.post

        Row
          .col-md-4.offset-md-8
            if(this.props.wallPost.post.comment_count)
              each comment, index in ['props.wallPost.comments,', 1]
                Card(key=index)
                  CardText comment

            CommentBox(
              action=comment
              wallpostId=this.props.wallPost.id
              label="add new comment"
              btnText="Add Comment"
              form=this.getUniqueFormName()
            )
  `

  getUniqueFormName = () => {
    if(this.props.wallPost){
      return `CommentForm-${this.props.wallPost.id}`
    } else return Math.random()
  }
}

export default WallPost
