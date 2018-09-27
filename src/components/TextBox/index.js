import { Form, FormGroup, Button, Label, Container } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

import { savePostActionCreator as savePost } from 'src/redux/Posts/actions'

class TextBox extends React.Component {
  render = () => pug`
    Container
      Form(onSubmit=this.props.handleSubmit(this.handleSubmit) error=this.props.error)
        FormGroup
          div
            Label text input box

          div
            Field(
              name=this.props.label
              component="textarea"
              type="text"
              placeholder=this.props.label
            )
        Button(
          color="primary"
          type="submit"
        )= this.props.btnText
  `

  handleSubmit = value => {
    if(this.props.wallPostId){ // needs to not care
      this.props.dispatch(this.props.action(value.newPost, this.props.wallPostId))
    } else this.props.dispatch(this.props.action(value.newPost))
  }
}

export default reduxForm({
  form: 'newPost',
})(TextBox)
