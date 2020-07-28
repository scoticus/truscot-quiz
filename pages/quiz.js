import { useState, useEffect } from 'react';

import TimesUp from '../components/TimesUp';
import QuizSummary from '../components/QuizSummary';
import QuestionPicker from '../components/QuestionPicker';

import questions from '../data/questions';

function useQuestionOrder(setLoading, setQuestionList) {
  useEffect(() => {
    // jumble questions
    let jumble = questions.sort(function () {
      return 0.5 - Math.random();
    });
    setQuestionList(jumble);
    setLoading(false);
  }, []);
  return null;
}

export default function Quiz() {
  const [loading, setLoading] = useState(true);
  const [timeUp, setTimeUp] = useState(false);
  const [finished, setFinished] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [questionList, setQuestionList] = useState([]);
  const [incorrectQs, setIncorrectQs] = useState([]);
  const [questionNum, setQuestionNum] = useState(1);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');

  useQuestionOrder(setLoading, setQuestionList);
  const questionData = questionList[questionNum - 1];

  function selectAnswer(selected) {
    setDisabled(true);
    setAnswer(selected);

    if (selected === questionData.correct) {
      setScore(score + 1);
    } else {
      // add question id to incorrectQs array
      setIncorrectQs([
        ...incorrectQs,
        { id: questionData.id, givenAnswer: selected },
      ]);
    }
  }

  function nextQ() {
    if (questionNum < questions.length) {
      setQuestionNum(questionNum + 1);
      setAnswer('');
      setDisabled(false);
    } else {
      setFinished(true);
    }
  }

  if (timeUp) {
    return <TimesUp />;
  }

  if (finished) {
    return (
      <QuizSummary
        score={score}
        quizLength={questions.length}
        incorrectQs={incorrectQs}
      />
    );
  }

  return (
    <>
      {!finished && !loading && (
        <QuestionPicker
          questionNum={questionNum}
          questions={questions}
          setTimeUp={setTimeUp}
          questionData={questionData}
          disabled={disabled}
          answer={answer}
          selectAnswer={selectAnswer}
          nextQ={nextQ}
        />
      )}
    </>
  );
}
