import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_CODE, {
      includedDomains: [process.env.NEXT_PUBLIC_FATHOM_DOMAIN],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <div className="viewport">
      <header />
      <Component {...pageProps} />
    </div>
  );
}
