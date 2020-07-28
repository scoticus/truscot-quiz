import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TruScot Quiz</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏴󠁧󠁢󠁳󠁣󠁴󠁿</text></svg>"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://truscot.com" />
        <meta name="twitter:title" content="TruScot Quiz" />
        <meta
          name="twitter:description"
          content="Think your clued up about Caledonia? Find out with the TruScot quiz!"
        />
      </Head>
      <div className="viewport">
        <header />
        <Component {...pageProps} />
      </div>
    </>
  );
}
