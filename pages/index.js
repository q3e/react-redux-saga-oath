import { Container, Button } from 'reactstrap'
import Link from 'next/link'

import '../src/assets/bootstrap.scss'

const HomePage = () => pug`
  Container.text-center
    p Please log in

    Link(href="/login")
      Button Login with Email
`

export default HomePage
