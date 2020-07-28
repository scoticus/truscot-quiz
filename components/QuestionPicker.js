import Link from 'next/link';

import Timer from './Timer';
import QuestionResult from './QuestionResult';

import { Heading, QuestionContainer } from '../styles/pickerStyles';

export default function QuestionPicker({
  questionNum,
  questions,
  setTimeUp,
  questionData,
  disabled,
  answer,
  selectAnswer,
  nextQ,
}) {
  function findAnswerClasses(value) {
    if (answer === '') {
      return null;
    }
    if (questionData.correct !== answer && answer === value) {
      return 'wrong';
    }
    if (questionData.correct === value) {
      return 'correct';
    }
  }

  return (
    <>
      <Heading>
        <Link href="/">
          <a className="exit">Exit</a>
        </Link>
        <div className="info">
          <h2>
            Question {questionNum} of {questions.length}
          </h2>
          <Timer setTimeUp={setTimeUp} />
        </div>
      </Heading>
      <main>
        <QuestionContainer>
          <h1>{questionData.title}</h1>

          {questionData.options.map((value, i) => (
            <button
              key={i}
              type="button"
              onClick={() => selectAnswer(value)}
              disabled={disabled}
              className={findAnswerClasses(value)}
            >
              {value}
            </button>
          ))}

          {answer !== '' && (
            <>
              <QuestionResult
                selectedAnswer={answer}
                correctAnswer={questionData.correct}
              />
              <button type="button" onClick={() => nextQ()}>
                {questionNum === questions.length
                  ? 'Finish quiz'
                  : 'Next question'}
              </button>
            </>
          )}
        </QuestionContainer>
      </main>
    </>
  );
}
