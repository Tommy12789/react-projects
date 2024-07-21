import { useState } from 'react';
import QUESTIONS from '../QUESTIONS';
import QUIZZ_COMPLETE from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img
          src={QUIZZ_COMPLETE}
          alt='Quizz complete image'
        />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      </div>
      <ul id='answers'>
        {shuffledAnswers.map((answer) => {
          return (
            <li
              key={answer}
              className='answer'
            >
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
