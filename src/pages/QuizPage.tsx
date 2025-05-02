import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question';
import { quizQuestions } from '../data/quizQuestions';
import { AnswerType, QuizState } from '../types/quiz';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: [],
    isComplete: false
  });

  const currentQuestion = quizQuestions[quizState.currentQuestionIndex];
  const currentAnswer = quizState.answers.find(
    (answer) => answer.questionId === currentQuestion.id
  )?.answer;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...quizState.answers];
    const existingAnswerIndex = newAnswers.findIndex(
      (a) => a.questionId === currentQuestion.id
    );

    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = { questionId: currentQuestion.id, answer };
    } else {
      newAnswers.push({ questionId: currentQuestion.id, answer });
    }

    setQuizState((prev) => ({
      ...prev,
      answers: newAnswers
    }));
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    } else {
      setQuizState((prev) => ({ ...prev, isComplete: true }));
      navigate('/results', { state: { answers: quizState.answers } });
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState((prev) => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  const progress = ((quizState.currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="w-full bg-pale-blue h-2">
        <motion.div
          className="h-full bg-navy"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-2xl"
        >
          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
            currentAnswer={currentAnswer}
          />
        </motion.div>

        <div className="flex justify-between w-full max-w-2xl mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrevious}
            disabled={quizState.currentQuestionIndex === 0}
            className={`px-6 py-2 rounded-full font-inter ${
              quizState.currentQuestionIndex === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-navy border-2 border-navy hover:bg-navy hover:text-white'
            }`}
          >
            Previous
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={!currentAnswer}
            className={`px-6 py-2 rounded-full font-inter ${
              !currentAnswer
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-navy border-2 border-navy hover:bg-navy hover:text-white'
            }`}
          >
            {quizState.currentQuestionIndex === quizQuestions.length - 1
              ? 'Finish'
              : 'Next'}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage; 