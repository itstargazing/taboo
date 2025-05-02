import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface SavedProject {
  id: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed';
  notes: string;
  todos: string[];
}

const ProjectVault: React.FC = () => {
  const navigate = useNavigate();
  const [savedProjects, setSavedProjects] = useState<SavedProject[]>([
    {
      id: '1',
      title: "The Algorithmic Diary",
      description: "Create a digital journal that uses your daily entries to generate personalized poetry or music based on your mood and themes.",
      status: 'planning',
      notes: "Need to research NLP libraries and music generation APIs",
      todos: [
        "Research NLP libraries",
        "Find music generation API",
        "Design UI mockups"
      ]
    }
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (projectId: string) => {
    if (!newTodo.trim()) return;
    
    setSavedProjects(prev => prev.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          todos: [...project.todos, newTodo.trim()]
        };
      }
      return project;
    }));
    
    setNewTodo("");
  };

  const handleStatusChange = (projectId: string, newStatus: SavedProject['status']) => {
    setSavedProjects(prev => prev.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          status: newStatus
        };
      }
      return project;
    }));
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-playfair text-4xl text-navy">Your Project Vault</h1>
          <button
            onClick={() => navigate('/quiz')}
            className="border-2 border-navy text-navy px-6 py-2 rounded-full font-inter hover:bg-navy hover:text-white transition-colors duration-300"
          >
            Find New Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-pale-blue rounded-lg p-6"
            >
              <h2 className="font-playfair text-2xl text-navy mb-2">{project.title}</h2>
              <p className="text-navy mb-4">{project.description}</p>

              <div className="mb-4">
                <label className="block text-navy font-inter mb-2">Status</label>
                <select
                  value={project.status}
                  onChange={(e) => handleStatusChange(project.id, e.target.value as SavedProject['status'])}
                  className="w-full px-4 py-2 border-2 border-navy rounded-lg bg-white text-navy"
                >
                  <option value="planning">Planning</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-navy font-inter mb-2">Notes</label>
                <textarea
                  value={project.notes}
                  onChange={(e) => {
                    setSavedProjects(prev => prev.map(p => 
                      p.id === project.id ? { ...p, notes: e.target.value } : p
                    ));
                  }}
                  className="w-full px-4 py-2 border-2 border-navy rounded-lg bg-white text-navy"
                  rows={3}
                />
              </div>

              <div className="mb-4">
                <label className="block text-navy font-inter mb-2">To-Do List</label>
                <div className="space-y-2 mb-2">
                  {project.todos.map((todo, todoIndex) => (
                    <div key={todoIndex} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="text-navy"
                      />
                      <span className="text-navy">{todo}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add new task..."
                    className="flex-1 px-4 py-2 border-2 border-navy rounded-lg bg-white text-navy"
                  />
                  <button
                    onClick={() => handleAddTodo(project.id)}
                    className="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90"
                  >
                    Add
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

export default ProjectVault; 