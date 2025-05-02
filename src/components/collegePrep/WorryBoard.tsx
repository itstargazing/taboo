import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WorryPost } from '../../types/collegePrep';

const WorryBoard: React.FC = () => {
  const [posts, setPosts] = useState<WorryPost[]>([
    {
      id: '1',
      content: 'I\'m worried about making friends in college. How do I meet new people?',
      responses: [
        {
          id: '1-1',
          content: 'Join clubs and organizations that interest you! It\'s a great way to meet people with similar interests.',
          timestamp: '2024-03-15T10:30:00'
        },
        {
          id: '1-2',
          content: 'Don\'t be afraid to introduce yourself to people in your classes or dorm. Everyone is in the same boat!',
          timestamp: '2024-03-15T11:45:00'
        }
      ],
      timestamp: '2024-03-15T09:15:00'
    },
    {
      id: '2',
      content: 'How do I manage my time effectively with a heavy course load?',
      responses: [
        {
          id: '2-1',
          content: 'Use a planner or digital calendar to schedule your study time and stick to it.',
          timestamp: '2024-03-14T14:20:00'
        }
      ],
      timestamp: '2024-03-14T13:45:00'
    }
  ]);

  const [newPost, setNewPost] = useState<string>('');
  const [newResponses, setNewResponses] = useState<Record<string, string>>({});

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: WorryPost = {
      id: Date.now().toString(),
      content: newPost,
      responses: [],
      timestamp: new Date().toISOString()
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleResponseSubmit = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    const responseContent = newResponses[postId];
    if (!responseContent?.trim()) return;

    const response = {
      id: `${postId}-${Date.now()}`,
      content: responseContent,
      timestamp: new Date().toISOString()
    };

    setPosts(posts.map(post => 
      post.id === postId
        ? { ...post, responses: [...post.responses, response] }
        : post
    ));

    setNewResponses({ ...newResponses, [postId]: '' });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Worry Board
          </h1>
          <p className="text-lg text-gray-600">
            Share your concerns and get support from peers
          </p>
        </div>

        <form onSubmit={handlePostSubmit} className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share your concern..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={3}
            />
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Post
              </button>
            </div>
          </div>
        </form>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="mb-4">
                <p className="text-gray-700">
                  {post.content}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Posted on {formatDate(post.timestamp)}
                </p>
              </div>

              <div className="space-y-4">
                {post.responses.map((response) => (
                  <div key={response.id} className="pl-4 border-l-2 border-indigo-200">
                    <p className="text-gray-700">
                      {response.content}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatDate(response.timestamp)}
                    </p>
                  </div>
                ))}

                <form onSubmit={(e) => handleResponseSubmit(post.id, e)}>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newResponses[post.id] || ''}
                      onChange={(e) => setNewResponses({ ...newResponses, [post.id]: e.target.value })}
                      placeholder="Write a response..."
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Reply
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorryBoard; 