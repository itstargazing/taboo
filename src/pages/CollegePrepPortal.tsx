import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CollegePrepPortal: React.FC = () => {
  const sections = [
    {
      title: 'Timeline Generator',
      description: 'Create a personalized college application timeline',
      path: '/college-prep/timeline',
      icon: '📅',
      color: 'from-blue-50 to-indigo-50'
    },
    {
      title: 'Document Templates',
      description: 'Access templates for resumes, recommendations, and more',
      path: '/college-prep/documents',
      icon: '📄',
      color: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Essay Prompts',
      description: 'Find and practice with common essay prompts',
      path: '/college-prep/essays',
      icon: '✍️',
      color: 'from-green-50 to-teal-50'
    },
    {
      title: 'Scholarship Finder',
      description: 'Discover scholarships that match your profile',
      path: '/college-prep/scholarships',
      icon: '💰',
      color: 'from-yellow-50 to-orange-50'
    },
    {
      title: 'Student Guides',
      description: 'Learn about dorm life, food, finance, and culture',
      path: '/college-prep/guides',
      icon: '📚',
      color: 'from-red-50 to-pink-50'
    },
    {
      title: 'Student Voices',
      description: 'Read experiences and advice from current students',
      path: '/college-prep/voices',
      icon: '🗣️',
      color: 'from-indigo-50 to-purple-50'
    },
    {
      title: 'Resource Library',
      description: 'Access templates, prompts, and tools',
      path: '/college-prep/resources',
      icon: '📁',
      color: 'from-teal-50 to-cyan-50'
    },
    {
      title: 'Worry Board',
      description: 'Share concerns and get support from peers',
      path: '/college-prep/worry-board',
      icon: '💭',
      color: 'from-pink-50 to-rose-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-dark-navy py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-4xl md:text-5xl text-white mb-4"
          >
            College Prep Portal
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-pale-blue font-inter"
          >
            Your comprehensive guide to college preparation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={section.path}
                className={`block p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${section.color}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-4xl mb-4 text-center"
                >
                  {section.icon}
                </motion.div>
                <h2 className="text-xl font-semibold text-navy mb-2 font-playfair">
                  {section.title}
                </h2>
                <p className="text-gray-600 font-inter">{section.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-pale-blue font-inter mb-4">Recent Resources</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="border border-pale-blue p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <p className="text-pale-blue font-inter">"The timeline generator helped me stay organized throughout my application process!"</p>
            </div>
            <div className="border border-pale-blue p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <p className="text-pale-blue font-inter">"Found the perfect scholarship through the scholarship finder"</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CollegePrepPortal; 