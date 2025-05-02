import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnswerType } from '../types/quiz';

interface ProjectIdea {
  title: string;
  description: string;
  whyItFits: string;
  tools: string[];
}

const generateProjectIdeas = (answers: AnswerType[]): ProjectIdea[] => {
  // This is a placeholder for the AI-powered project generation
  // In a real implementation, this would use the answers to generate personalized ideas
  return [
    {
      title: "The Algorithmic Diary",
      description: "Create a digital journal that uses your daily entries to generate personalized poetry or music based on your mood and themes.",
      whyItFits: "Combines your interest in algorithms with your passion for creative expression.",
      tools: ["Python", "Natural Language Processing", "Music Generation API"]
    },
    {
      title: "DIY Conspiracy Podcast",
      description: "Produce a podcast that explores unusual theories and ideas, using your unique perspective to make complex topics accessible.",
      whyItFits: "Leverages your ability to talk about topics for hours and your interest in unusual ideas.",
      tools: ["Audio Recording Software", "Editing Tools", "Research Skills"]
    },
    {
      title: "Interactive Art Installation",
      description: "Design an art piece that responds to viewer interaction, creating unique experiences for each person.",
      whyItFits: "Combines your technical skills with your creative vision.",
      tools: ["Arduino", "Sensors", "Creative Coding"]
    }
  ];
};

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers as AnswerType[];
  const [projectIdeas] = useState<ProjectIdea[]>(() => generateProjectIdeas(answers));

  const handleShuffle = () => {
    // In a real implementation, this would generate new ideas
    // For now, we'll just navigate back to the quiz
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-playfair text-4xl text-navy mb-8 text-center">
          Your Personalized Project Ideas
        </h1>

        <div className="space-y-8">
          {projectIdeas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-pale-blue rounded-lg p-6"
            >
              <h2 className="font-playfair text-2xl text-navy mb-4">{idea.title}</h2>
              <p className="text-navy mb-4">{idea.description}</p>
              <div className="bg-pale-blue p-4 rounded-lg mb-4">
                <h3 className="font-inter font-semibold text-navy mb-2">Why This Fits You</h3>
                <p className="text-navy">{idea.whyItFits}</p>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-navy mb-2">Suggested Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {idea.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-pale-blue text-navy rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShuffle}
            className="border-2 border-navy text-navy px-6 py-2 rounded-full font-inter hover:bg-navy hover:text-white transition-colors duration-300"
          >
            Shuffle Ideas
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/library')}
            className="border-2 border-navy text-navy px-6 py-2 rounded-full font-inter hover:bg-navy hover:text-white transition-colors duration-300"
          >
            Explore More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsPage; 