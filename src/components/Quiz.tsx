import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import QuestionScreen from './QuestionScreen';
import ResultScreen from './ResultScreen';
import { QuizState } from '../types/quiz';
import { quizQuestions } from '../data/quizData';

const Quiz: React.FC = () => {
  const [currentState, setCurrentState] = useState<QuizState>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleStart = () => {
    setCurrentState('questions');
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentState('result');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentState('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (currentState === 'welcome') {
    return <WelcomeScreen onStart={handleStart} />;
  }

  if (currentState === 'questions') {
    return (
      <QuestionScreen
        question={quizQuestions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={quizQuestions.length}
        selectedAnswer={answers[currentQuestion]}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onPrevious={handlePrevious}
        progress={progress}
        canGoNext={answers[currentQuestion] !== undefined}
      />
    );
  }

  return <ResultScreen onRestart={handleRestart} />;
};

export default Quiz;