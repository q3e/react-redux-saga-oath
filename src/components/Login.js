import { Field, reduxForm } from 'redux-form'
import { Container, Button, Form, FormGroup, Label } from 'reactstrap'
import { formActionCreator as login } from 'src/redux/Login/actions'

class LoginForm extends React.Component{
  render = () => pug`
    Container.text-center
      Form(onSubmit=this.props.handleSubmit(this.handleSubmit) error=this.props.error)
        FormGroup
          Label Email
          Field(
            name="email"
            component="input"
            type="email"
            placeholder="email"
          )
        FormGroup
          Label Password
          Field(
            name="password"
            component="input"
            type="password"
            placeholder="password"
          )
        Button(
          type="submit"
          disabled=this.props.pristine||this.props.submitting
        ) Login
  `
  handleSubmit = values => {
    this.props.dispatch(login(values))
  }
}

export default reduxForm({
  form: 'login',
})(LoginForm)
