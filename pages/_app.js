import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="viewport">
      <header />
      <Component {...pageProps} />
    </div>
  );
}
