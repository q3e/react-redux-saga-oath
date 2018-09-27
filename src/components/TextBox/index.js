import { Form, FormGroup, Button, Label, Container } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

import { savePostActionCreator as savePost } from 'src/redux/Posts/actions'

class TextBox extends React.Component {
  render = () => pug`
    Container
      Form(onSubmit=this.props.handleSubmit(this.handleSubmit) error=this.props.error)
        FormGroup
          div
            Label Post Text

          div
            Field(
              name="newPost"
              component="textarea"
              type="text"
              placeholder="New Post"
            )
        Button(color="primary" type="submit") Post
  `

  handleSubmit = value => {
    if(this.props.wallId){ // needs to not care
      this.props.dispatch(this.props.action(value.newPost, this.props.wallId))
    } else this.props.dispatch(this.props.action(value.newPost))
  }
}

export default reduxForm({
  form: 'newPost',
})(TextBox)
