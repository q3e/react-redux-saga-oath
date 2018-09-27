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

  handleSubmit = value => { this.props.dispatch(savePost(value.newPost)) }
}

export default reduxForm({
  form: 'newPost',
})(TextBox)
