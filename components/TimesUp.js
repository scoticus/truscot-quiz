import Link from 'next/link';
import styled from '@emotion/styled';
import Footer from './Footer';

const Container = styled.section`
  text-align: center;
  margin-top: 50px;

  a {
    text-decoration: none;
    color: var(--saltire-blue);
    font-size: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function TimesUp() {
  return (
    <>
      <main>
        <Container>
          <span role="img" aria-label="Alarm clock">
            ⏰
          </span>
          <h1>You've run out of time</h1>
          <Link href="/">
            <a>Return to Homepage to try again</a>
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
