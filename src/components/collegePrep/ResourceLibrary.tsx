import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Resource } from '../../types/collegePrep';

const ResourceLibrary: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'College Essay Template',
      type: 'template',
      category: 'writing',
      url: '/resources/essay-template.pdf',
      description: 'A structured template for organizing your college essays',
      tags: ['essay', 'writing', 'template']
    },
    {
      id: '2',
      title: 'Resume Design Guide',
      type: 'pdf',
      category: 'design',
      url: '/resources/resume-design.pdf',
      description: 'Professional tips for creating an eye-catching resume',
      tags: ['resume', 'design', 'professional']
    },
    {
      id: '3',
      title: 'Study Schedule Template',
      type: 'template',
      category: 'organizing',
      url: '/resources/study-schedule.xlsx',
      description: 'Customizable template for planning your study schedule',
      tags: ['schedule', 'time management', 'template']
    },
    {
      id: '4',
      title: 'Note-Taking System',
      type: 'tool',
      category: 'productivity',
      url: '/resources/note-taking-system.pdf',
      description: 'Effective methods for taking and organizing notes',
      tags: ['notes', 'organization', 'study']
    },
    {
      id: '5',
      title: 'College Application Checklist',
      type: 'template',
      category: 'organizing',
      url: '/resources/application-checklist.pdf',
      description: 'Comprehensive checklist for college applications',
      tags: ['checklist', 'applications', 'organization']
    },
    {
      id: '6',
      title: 'Writing Prompts Collection',
      type: 'prompt',
      category: 'writing',
      url: '/resources/writing-prompts.pdf',
      description: 'Collection of thought-provoking writing prompts',
      tags: ['writing', 'prompts', 'essay']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesCategory && matchesSearch;
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
            Resource Library
          </h1>
          <p className="text-lg text-gray-600">
            Access templates, guides, and tools for your college journey
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="template">Templates</option>
              <option value="prompt">Prompts</option>
              <option value="pdf">PDFs</option>
              <option value="tool">Tools</option>
            </select>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="writing">Writing</option>
              <option value="design">Design</option>
              <option value="organizing">Organizing</option>
              <option value="productivity">Productivity</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  resource.type === 'template'
                    ? 'bg-green-100 text-green-800'
                    : resource.type === 'prompt'
                    ? 'bg-blue-100 text-blue-800'
                    : resource.type === 'pdf'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {resource.type}
                </span>
                <span className="text-gray-500 text-sm">
                  {resource.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {resource.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleDownload(resource.url)}
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Download Resource
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceLibrary; 