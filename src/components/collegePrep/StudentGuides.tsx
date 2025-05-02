import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StudentGuide } from '../../types/collegePrep';

const StudentGuides: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedGuide, setExpandedGuide] = useState<string | null>(null);

  const guides: StudentGuide[] = [
    {
      id: '1',
      title: 'Dorm Room Essentials',
      category: 'dorm',
      content: 'Moving into a dorm room can be both exciting and overwhelming. Here\'s a comprehensive guide to help you prepare...',
      checklist: [
        'Bedding (sheets, pillows, comforter)',
        'Storage solutions (under-bed storage, closet organizers)',
        'Desk supplies (lamp, stationery)',
        'Personal items (photos, decorations)',
        'Cleaning supplies',
        'Laundry essentials'
      ]
    },
    {
      id: '2',
      title: 'Campus Dining Guide',
      category: 'food',
      content: 'Navigating campus dining options and maintaining a healthy diet while in college...',
      checklist: [
        'Meal plan options and costs',
        'Best dining halls for different cuisines',
        'Healthy eating tips',
        'Budget-friendly meal ideas',
        'Local restaurant recommendations'
      ]
    },
    {
      id: '3',
      title: 'Financial Planning for Students',
      category: 'finance',
      content: 'Managing your finances effectively during college years...',
      checklist: [
        'Creating a budget',
        'Understanding student loans',
        'Saving strategies',
        'Part-time job opportunities',
        'Scholarship applications'
      ]
    },
    {
      id: '4',
      title: 'Campus Culture and Social Life',
      category: 'culture',
      content: 'Understanding and engaging with campus culture and social activities...',
      checklist: [
        'Student organizations and clubs',
        'Campus events and traditions',
        'Making friends and networking',
        'Balancing social life and academics',
        'Campus resources and support services'
      ]
    }
  ];

  const filteredGuides = guides.filter(guide => 
    selectedCategory === 'all' || guide.category === selectedCategory
  );

  const handleGuideClick = (guideId: string) => {
    setExpandedGuide(expandedGuide === guideId ? null : guideId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Student Guides
          </h1>
          <p className="text-lg text-gray-600">
            Essential guides for navigating college life
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Guides
            </button>
            <button
              onClick={() => setSelectedCategory('dorm')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'dorm'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Dorm Life
            </button>
            <button
              onClick={() => setSelectedCategory('food')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'food'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Food & Dining
            </button>
            <button
              onClick={() => setSelectedCategory('finance')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'finance'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Finance
            </button>
            <button
              onClick={() => setSelectedCategory('culture')}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === 'culture'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Campus Culture
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => handleGuideClick(guide.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {guide.title}
                  </h3>
                  <span className="text-gray-500">
                    {expandedGuide === guide.id ? '▼' : '▶'}
                  </span>
                </div>
              </button>

              {expandedGuide === guide.id && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 mb-4">
                    {guide.content}
                  </p>
                  
                  {guide.checklist && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        Checklist:
                      </h4>
                      <ul className="space-y-2">
                        {guide.checklist.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentGuides; 