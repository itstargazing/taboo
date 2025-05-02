import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scholarship } from '../../types/collegePrep';

const ScholarshipFinder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedOutput, setSelectedOutput] = useState<string>('all');

  const scholarships: Scholarship[] = [
    {
      id: '1',
      title: 'STEM Research Scholarship',
      deadline: '2024-05-15',
      format: 'online',
      output: 'research',
      eligibility: ['High school seniors', 'STEM majors'],
      tags: ['STEM', 'Research', 'Science'],
      description: 'Award for students conducting innovative STEM research projects',
      url: '/scholarships/stem-research'
    },
    {
      id: '2',
      title: 'Creative Writing Competition',
      deadline: '2024-04-30',
      format: 'in-person',
      output: 'creative',
      eligibility: ['All high school students'],
      tags: ['Writing', 'Creative', 'Arts'],
      description: 'Annual competition for original short stories and poetry',
      url: '/scholarships/creative-writing'
    },
    {
      id: '3',
      title: 'Community Service Award',
      deadline: '2024-06-01',
      format: 'online',
      output: 'competitive',
      eligibility: ['High school students', 'Community service experience'],
      tags: ['Service', 'Leadership', 'Community'],
      description: 'Recognition for outstanding community service contributions',
      url: '/scholarships/community-service'
    },
    {
      id: '4',
      title: 'Environmental Science Research Grant',
      deadline: '2024-05-01',
      format: 'online',
      output: 'research',
      eligibility: ['High school juniors and seniors', 'Environmental science interest'],
      tags: ['Environment', 'Research', 'Science'],
      description: 'Funding for environmental science research projects',
      url: '/scholarships/environmental-science'
    }
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scholarship.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scholarship.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFormat = selectedFormat === 'all' || scholarship.format === selectedFormat;
    const matchesOutput = selectedOutput === 'all' || scholarship.output === selectedOutput;
    return matchesSearch && matchesFormat && matchesOutput;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Scholarship Finder
          </h1>
          <p className="text-lg text-gray-600">
            Discover scholarships that match your interests and qualifications
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <input
              type="text"
              placeholder="Search scholarships..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Formats</option>
              <option value="online">Online</option>
              <option value="in-person">In-Person</option>
            </select>
            <select
              value={selectedOutput}
              onChange={(e) => setSelectedOutput(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="research">Research</option>
              <option value="creative">Creative</option>
              <option value="competitive">Competitive</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  scholarship.format === 'online' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {scholarship.format}
                </span>
                <span className="text-gray-500 text-sm">
                  Deadline: {new Date(scholarship.deadline).toLocaleDateString()}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {scholarship.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {scholarship.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Eligibility:
                </h4>
                <ul className="space-y-1">
                  {scholarship.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {scholarship.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => window.open(scholarship.url, '_blank')}
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipFinder; 