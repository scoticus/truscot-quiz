export default function QuestionResult({ selectedAnswer, correctAnswer }) {
  if (selectedAnswer === correctAnswer) {
    return (
      <div className="result">
        <h2>
          <span role="img" aria-label="Thumbs up">
            👍
          </span>{' '}
          Correct
        </h2>
      </div>
    );
  }

  return (
    <div className="result">
      <h2>
        <span role="img" aria-label="A big red X">
          ❌
        </span>{' '}
        Wrong
      </h2>
      <p>
        The correct answer is <strong>{correctAnswer}</strong>
      </p>
    </div>
  );
}
