import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DocumentType } from '../../types/collegePrep';

const DocumentTemplates: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const documents: DocumentType[] = [
    {
      id: '1',
      title: 'College Resume Template',
      type: 'resume',
      level: 'beginner',
      url: '/templates/resume-beginner.pdf',
      description: 'A simple template for creating your first college resume'
    },
    {
      id: '2',
      title: 'Advanced Resume Template',
      type: 'resume',
      level: 'advanced',
      url: '/templates/resume-advanced.pdf',
      description: 'Professional template with sections for achievements and skills'
    },
    {
      id: '3',
      title: 'Letter of Recommendation Guide',
      type: 'recommendation',
      level: 'beginner',
      url: '/templates/recommendation-guide.pdf',
      description: 'Tips and examples for requesting strong letters of recommendation'
    },
    {
      id: '4',
      title: 'Personal Statement Template',
      type: 'personal-statement',
      level: 'beginner',
      url: '/templates/personal-statement.pdf',
      description: 'Structure and prompts for writing your personal statement'
    },
    {
      id: '5',
      title: 'Advanced Personal Statement Guide',
      type: 'personal-statement',
      level: 'advanced',
      url: '/templates/personal-statement-advanced.pdf',
      description: 'Advanced techniques for crafting compelling personal statements'
    },
    {
      id: '6',
      title: 'SAT/ACT Study Plan',
      type: 'test-prep',
      level: 'beginner',
      url: '/templates/test-prep-plan.pdf',
      description: 'Customizable study plan for standardized test preparation'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const typeMatch = selectedType === 'all' || doc.type === selectedType;
    const levelMatch = selectedLevel === 'all' || doc.level === selectedLevel;
    return typeMatch && levelMatch;
  });

  const handleDownload = (url: string) => {
    // In a real application, this would trigger the download
    console.log('Downloading:', url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Document Templates
          </h1>
          <p className="text-lg text-gray-600">
            Access templates and guides for your college application documents
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Types</option>
            <option value="resume">Resume</option>
            <option value="recommendation">Recommendation</option>
            <option value="personal-statement">Personal Statement</option>
            <option value="test-prep">Test Prep</option>
          </select>

          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  doc.level === 'beginner' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {doc.level}
                </span>
                <span className="text-gray-500 text-sm">
                  {doc.type}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {doc.description}
              </p>

              <button
                onClick={() => handleDownload(doc.url)}
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Download Template
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentTemplates; 