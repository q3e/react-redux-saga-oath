import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { configureStore } from 'src/redux/store'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  render = () => pug`
    Container
      Provider(store=this.props.store)
        = React.createElement(this.props.Component, this.props.pageProps)
  `
}

export default withRedux(configureStore)(withReduxSaga({ async: true })(MyApp))
