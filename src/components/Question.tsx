import React from 'react';
import { motion } from 'framer-motion';
import { QuestionType } from '../types/quiz';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
  currentAnswer?: string;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer, currentAnswer }) => {
  const renderInput = () => {
    switch (question.inputType) {
      case 'text':
        return (
          <input
            type="text"
            value={currentAnswer || ''}
            onChange={(e) => onAnswer(e.target.value)}
            className="w-full px-4 py-2 border-b-2 border-pale-blue focus:border-navy outline-none bg-transparent text-navy"
            placeholder="Type your answer..."
          />
        );
      case 'radio':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <label key={option} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={currentAnswer === option}
                  onChange={(e) => onAnswer(e.target.value)}
                  className="text-navy focus:ring-navy"
                />
                <span className="text-navy">{option}</span>
              </label>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto p-6"
    >
      <h2 className="font-playfair text-2xl text-navy mb-6">{question.question}</h2>
      {renderInput()}
    </motion.div>
  );
};

export default Question; 