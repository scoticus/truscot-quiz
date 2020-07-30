import Head from 'next/head';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <div className="viewport">
        <header />
        <Component {...pageProps} />
      </div>
    </>
  );
}
