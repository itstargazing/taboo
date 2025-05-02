import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EssayPrompt } from '../../types/collegePrep';

const EssayPrompts: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [showExamples, setShowExamples] = useState<boolean>(false);

  const prompts: EssayPrompt[] = [
    {
      id: '1',
      question: 'Describe a challenge you\'ve faced and how you overcame it.',
      tips: [
        'Focus on your personal growth',
        'Show resilience and problem-solving skills',
        'Be specific about the impact'
      ],
      examples: [
        'Overcoming stage fright during a school play',
        'Learning to manage time effectively',
        'Adapting to a new school environment'
      ]
    },
    {
      id: '2',
      question: 'What is your favorite book and why?',
      tips: [
        'Connect the book to your personal experiences',
        'Show critical thinking skills',
        'Demonstrate your values and interests'
      ],
      examples: [
        'How a novel changed your perspective',
        'A character you identify with',
        'Lessons learned from the story'
      ]
    },
    {
      id: '3',
      question: 'Describe a time when you made a difference in your community.',
      tips: [
        'Focus on the impact of your actions',
        'Show leadership and initiative',
        'Demonstrate your values'
      ],
      examples: [
        'Organizing a community service project',
        'Starting a school club or initiative',
        'Volunteering experiences'
      ]
    },
    {
      id: '4',
      question: 'What are your academic interests and how have you pursued them?',
      tips: [
        'Show passion and curiosity',
        'Demonstrate initiative in learning',
        'Connect to future goals'
      ],
      examples: [
        'Independent research projects',
        'Participation in academic competitions',
        'Extracurricular learning experiences'
      ]
    }
  ];

  const handlePromptSelect = (promptId: string) => {
    setSelectedPrompt(promptId);
    setShowExamples(false);
  };

  const selectedPromptData = prompts.find(p => p.id === selectedPrompt);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Essay Prompts
          </h1>
          <p className="text-lg text-gray-600">
            Practice with common college essay prompts and get writing tips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {prompts.map((prompt) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedPrompt === prompt.id
                    ? 'bg-indigo-100 border-2 border-indigo-500'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => handlePromptSelect(prompt.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {prompt.question}
                </h3>
              </motion.div>
            ))}
          </div>

          {selectedPromptData && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Writing Tips
              </h3>
              <ul className="space-y-2 mb-6">
                {selectedPromptData.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowExamples(!showExamples)}
                className="mb-4 text-indigo-600 hover:text-indigo-800"
              >
                {showExamples ? 'Hide Examples' : 'Show Examples'}
              </button>

              {showExamples && selectedPromptData.examples && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Example Topics
                  </h4>
                  <ul className="space-y-2">
                    {selectedPromptData.examples.map((example, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Start Writing
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EssayPrompts; 