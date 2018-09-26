// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render = () => pug`
    html
      Head
        meta(charSet="utf8")

        title Assesment App

        meta(name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no")

        link(rel="icon" href="/static/favicon.ico")

      body
        Main
        NextScript
  `
}
