import Link from 'next/link'
import moment from 'moment'

export default function withAuth(Component) {
  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isTokenExpired: false,
      }
    }

    componentWillMount () {
      if (localStorage.getItem('access_token')){
        const tokenExpiry = localStorage.getItem('token_expiry')
        if(tokenExpiry > moment.now()) {
          this.setState({ isTokenExpired: true })
        }
      }
    }

    render = () => pug`
      if this.state.isTokenExpired
        div: h1 Please Login...
          Link(href="/login") go to login
      else
        Component(...props)
    `
  }
}
