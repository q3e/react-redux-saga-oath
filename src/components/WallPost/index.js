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
            if(this.props.wallPost.commentCount !==0 )
              each comment, index in this.props.wallPost.comments
                Card.border.border-primary-rounded(key=index)
                  CardText= comment.comment

            CommentBox(
              name="comment"
              action=comment
              wallPostId=this.props.wallPost.id
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
