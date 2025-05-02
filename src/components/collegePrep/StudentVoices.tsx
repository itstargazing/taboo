import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StudentVoice } from '../../types/collegePrep';

const StudentVoices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const voices: StudentVoice[] = [
    {
      id: '1',
      content: 'The transition to college was challenging, but joining student organizations helped me find my community. My advice: don\'t be afraid to step out of your comfort zone!',
      author: 'Sarah J., Sophomore',
      category: 'advice'
    },
    {
      id: '2',
      content: 'I remember my first day on campus - everything seemed so overwhelming. But looking back, those initial challenges helped me grow in ways I never expected.',
      author: 'Michael T., Junior',
      category: 'story'
    },
    {
      id: '3',
      content: 'Time management is key! Use a planner, set priorities, and don\'t be afraid to say no to social events when you need to focus on academics.',
      author: 'Emily R., Senior',
      category: 'tip'
    },
    {
      id: '4',
      content: 'I struggled with homesickness during my first semester. What helped me was finding a routine and making connections with people who shared my interests.',
      author: 'David L., Freshman',
      category: 'story'
    },
    {
      id: '5',
      content: 'Take advantage of office hours! Building relationships with professors has been invaluable for my academic and professional growth.',
      author: 'Jessica K., Junior',
      category: 'advice'
    },
    {
      id: '6',
      content: 'Don\'t forget to take care of your mental health. College can be stressful, but there are resources available to help you through tough times.',
      author: 'Alex M., Senior',
      category: 'tip'
    }
  ];

  const filteredVoices = voices.filter(voice => {
    const matchesCategory = selectedCategory === 'all' || voice.category === selectedCategory;
    const matchesSearch = voice.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         voice.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Student Voices
          </h1>
          <p className="text-lg text-gray-600">
            Real experiences and advice from current college students
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCategory('advice')}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'advice'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Advice
              </button>
              <button
                onClick={() => setSelectedCategory('story')}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'story'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Stories
              </button>
              <button
                onClick={() => setSelectedCategory('tip')}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === 'tip'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Tips
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {filteredVoices.map((voice, index) => (
            <motion.div
              key={voice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 text-xl">
                      {voice.author.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-2">
                    {voice.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {voice.author}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      voice.category === 'advice'
                        ? 'bg-green-100 text-green-800'
                        : voice.category === 'story'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {voice.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentVoices; 