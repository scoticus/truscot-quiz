import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏴󠁧󠁢󠁳󠁣󠁴󠁿</text></svg>"
          />
          <meta
            name="description"
            content="Think your clued up about Caledonia? Find out with the 30 question TruScot quiz!"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://truscot.com" />
          <meta name="twitter:title" content="TruScot Quiz" />
          <meta
            name="twitter:description"
            content="Think your clued up about Caledonia? Find out with the 30 question TruScot quiz!"
          />
          <meta
            name="twitter:image"
            content="https://truscot.com/icon_sq.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
