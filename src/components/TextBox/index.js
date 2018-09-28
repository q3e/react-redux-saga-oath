import { Form, FormGroup, Button, Label, Container } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'

import { savePostActionCreator as savePost } from 'src/redux/Posts/actions'

class TextBox extends React.Component {
  render = () => pug`
    Container
      Form(onSubmit=this.props.handleSubmit(this.handleSubmit) error=this.props.error)
        div
          Field(
            name=this.props.name
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
    if(this.props.name === 'comment'){ // needs to not care
      this.props.dispatch(this.props.action(value[this.props.name], this.props.wallPostId))
    } else this.props.dispatch(this.props.action(value[this.props.name]))
  }
}

export default reduxForm()(TextBox)
