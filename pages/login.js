import { Container, Button } from 'reactstrap'
import Link from 'next/link'

import LoginForm from 'src/components/Login'

import '../src/assets/bootstrap.scss'

const LoginPage = () => pug`
  Container
    LoginForm
`

export default LoginPage
