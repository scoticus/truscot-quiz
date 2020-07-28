import Link from 'next/link';
import questions from '../data/questions';
import Footer from './Footer';

import { Container, IncorrectSummary } from '../styles/summaryStyles';

export default function QuizSummary({ score, quizLength, incorrectQs }) {
  function whichMessage() {
    const result = score / quizLength;
    if (result === 1) {
      return 'Pure dead brilliant!';
    } else if (result < 1 && result > 0.5) {
      return 'Stoatin jab!';
    } else {
      return 'Ye just dinnae ken ';
    }
  }

  return (
    <>
      <main>
        <Container>
          <p className="thanks">Thanks for playing! 😀</p>
          <h1>
            You scored <span>{score}</span> out of <span>{quizLength}</span>
          </h1>
          <p className="message">{whichMessage()}</p>
          <div className="links">
            <a
              href={`https://twitter.com/intent/tweet?text=I+just+got+${score}+out+of+30+on+the+TruScot+quiz.+Think+you+can+beat+me%3F+https%3A%2F%2Ftruscot.com`}
              className="twitter"
            >
              Share on Twitter
            </a>

            <Link href="/">
              <a>Return to homepage</a>
            </Link>
          </div>
        </Container>
        <IncorrectSummary>
          {incorrectQs.length !== 0 && <h2>Your wrong answers</h2>}
          <div>
            {incorrectQs.map((value, i) => (
              <div key={i} className="card">
                <h3>
                  {
                    questions.filter((question) => question.id === value.id)[0]
                      .title
                  }
                </h3>
                <div>
                  <p>
                    <span className="meta">Correct answer</span>
                    {
                      questions.filter(
                        (question) => question.id === value.id
                      )[0].correct
                    }
                  </p>
                  <p>
                    <span className="meta">You answered</span>{' '}
                    {value.givenAnswer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </IncorrectSummary>
      </main>
      <Footer />
    </>
  );
}
