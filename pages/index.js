import Link from 'next/link';
import converter from 'number-to-words';

import Footer from '../components/Footer';
import { Container } from '../styles/indexStyles';

import questions from '../data/questions';

export default function Home() {
  return (
    <>
      <main>
        <img src="icon.svg" alt="Munro Quiz icon" width="32" className="icon" />
        <Container>
          <img src="/hill.svg" alt="Hills in the" />
          <h1>
            <span role="img" aria-label="Flag of Scotland">
              🏴󠁧󠁢󠁳󠁣󠁴󠁿
            </span>{' '}
            TruScot Quiz{' '}
            <span role="img" aria-label="Flag of Scotland">
              🏴󠁧󠁢󠁳󠁣󠁴󠁿
            </span>
          </h1>
          <p className="caledonia">Think you're clued up about Caledonia?</p>
          <p>
            Find out if you can call yourself a{' '}
            <strong style={{ color: 'var(--saltire-blue)' }}>TruScot</strong>{' '}
            with a {converter.toWords(questions.length)} question quiz!
          </p>
          <Link href="quiz">
            <a>Begin Quiz</a>
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}