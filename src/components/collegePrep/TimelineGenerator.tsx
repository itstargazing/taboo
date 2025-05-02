import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TimelineTask } from '../../types/collegePrep';

const TimelineGenerator: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('junior');
  const [tasks, setTasks] = useState<TimelineTask[]>([
    {
      id: '1',
      month: 'September',
      tasks: ['Start researching colleges', 'Begin preparing for standardized tests'],
      completed: false
    },
    {
      id: '2',
      month: 'October',
      tasks: ['Take PSAT', 'Start working on college essays'],
      completed: false
    },
    {
      id: '3',
      month: 'November',
      tasks: ['Register for SAT/ACT', 'Request letters of recommendation'],
      completed: false
    },
    {
      id: '4',
      month: 'December',
      tasks: ['Take SAT/ACT', 'Work on scholarship applications'],
      completed: false
    }
  ]);

  const handleTaskToggle = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = (month: string) => {
    const newTask = {
      id: Date.now().toString(),
      month,
      tasks: [''],
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            College Application Timeline Generator
          </h1>
          <p className="text-lg text-gray-600">
            Create and manage your personalized college application timeline
          </p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            {['junior', 'senior'].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full ${
                  selectedYear === year
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {year.charAt(0).toUpperCase() + year.slice(1)} Year
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {task.month}
                </h3>
                <button
                  onClick={() => handleTaskToggle(task.id)}
                  className={`px-4 py-2 rounded-full ${
                    task.completed
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {task.completed ? 'Completed' : 'Mark Complete'}
                </button>
              </div>
              
              <div className="space-y-2">
                {task.tasks.map((taskItem, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => handleTaskToggle(task.id)}
                      className="h-5 w-5 text-indigo-600"
                    />
                    <span className="text-gray-700">{taskItem}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleAddTask(task.month)}
                className="mt-4 text-indigo-600 hover:text-indigo-800"
              >
                + Add Task
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Save Timeline
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineGenerator; 