import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ProjectIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  tools: string[];
}

const sampleIdeas: ProjectIdea[] = [
  {
    id: '1',
    title: "AI-Generated Poetry Book",
    description: "Create a book of poetry where each poem is generated based on different emotions and themes, with hand-drawn illustrations.",
    category: "Art & Tech",
    upvotes: 42,
    tools: ["Python", "Natural Language Processing", "Illustration"]
  },
  {
    id: '2',
    title: "Urban Gardening App",
    description: "Develop an app that helps city dwellers find and share community garden spaces, with plant care tips and local events.",
    category: "Activism",
    upvotes: 35,
    tools: ["React Native", "Maps API", "Community Building"]
  },
  {
    id: '3',
    title: "Soundscape Documentary",
    description: "Create a documentary that explores the unique sounds of different neighborhoods, blending audio storytelling with visual elements.",
    category: "Media",
    upvotes: 28,
    tools: ["Audio Recording", "Video Editing", "Storytelling"]
  }
];

const categories = ["All", "Tech", "Art", "Activism", "Media", "Randomness"];

const IdeaLibrary: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIdeas = sampleIdeas.filter(idea => {
    const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-playfair text-4xl text-navy">Idea Library</h1>
          <button
            onClick={() => navigate('/quiz')}
            className="border-2 border-navy text-navy px-6 py-2 rounded-full font-inter hover:bg-navy hover:text-white transition-colors duration-300"
          >
            Take Quiz
          </button>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search ideas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border-b-2 border-pale-blue focus:border-navy outline-none bg-transparent text-navy mb-4"
          />
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-inter ${
                  selectedCategory === category
                    ? 'bg-navy text-white'
                    : 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-pale-blue rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="font-playfair text-2xl text-navy mb-2">{idea.title}</h2>
              <p className="text-navy mb-4">{idea.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {idea.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-pale-blue text-navy rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-navy font-inter">{idea.upvotes} upvotes</span>
                <div className="space-x-2">
                  <button className="text-navy hover:text-navy/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.5.25a2 2 0 001.788 0l.5-.25a2 2 0 001.106-1.79v-5.43a2 2 0 00-.5-1.5l-3-3a2 2 0 00-2.828 0l-3 3a2 2 0 00-.5 1.5z" />
                    </svg>
                  </button>
                  <button className="text-navy hover:text-navy/80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default IdeaLibrary; 