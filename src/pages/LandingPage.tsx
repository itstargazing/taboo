import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const keywords = [
  "Fashion", "Rockets", "K-pop", "Algorithms", "Shadows",
  "Poetry", "Robots", "Gardens", "Data", "Dreams",
  "Music", "Code", "Art", "Science", "Stories"
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [visibleKeywords, setVisibleKeywords] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * keywords.length);
      const newKeyword = keywords[randomIndex];
      setVisibleKeywords(prev => {
        if (prev.length >= 5) {
          return [...prev.slice(1), newKeyword];
        }
        return [...prev, newKeyword];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-playfair text-5xl md:text-6xl text-navy mb-8">
          Uncover the project only you could create.
        </h1>
        
        <div className="h-24 mb-8">
          {visibleKeywords.map((keyword, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="inline-block mx-2 text-2xl text-navy font-inter"
            >
              {keyword}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/quiz')}
            className="border-2 border-navy text-navy px-8 py-3 rounded-full font-inter text-lg hover:bg-navy hover:text-white transition-colors duration-300"
          >
            Find Your Project
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/college-prep')}
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-inter text-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300"
          >
            College Prep Portal
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-navy font-inter mb-4">Recent Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <div className="border border-pale-blue p-4 rounded-lg">
            <p className="text-navy font-inter">"I created a horror film scored with AI-generated lullabies!"</p>
          </div>
          <div className="border border-pale-blue p-4 rounded-lg">
            <p className="text-navy font-inter">"Built an interactive map of my city's street art"</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage; 