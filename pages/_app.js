import Head from 'next/head';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  process.env.NODE_ENV === 'production' &&
    useEffect(() => {
      Fathom.load('LNQHODLI', {
        url: 'https://reptile.truscot.com/script.js',
      });

      function onRouteChangeComplete() {
        Fathom.trackPageview();
      }

      router.events.on('routeChangeComplete', onRouteChangeComplete);

      return () => {
        router.events.off('routeChangeComplete', onRouteChangeComplete);
      };
    }, []);


  return (
    <>
      <Head>
        <title>TruScot Quiz</title>
      </Head>
      <div className="viewport">
        <header />
        <Component {...pageProps} />
      </div>
    </>
  );
}
