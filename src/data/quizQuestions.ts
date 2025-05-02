import { QuestionType } from '../types/quiz';

export const quizQuestions: QuestionType[] = [
  {
    id: 'interests-1',
    category: 'interests',
    question: "What's something you'd talk about for hours if no one interrupted you?",
    inputType: 'text'
  },
  {
    id: 'habits-1',
    category: 'habits',
    question: "What's something you do that people find unusual?",
    inputType: 'text'
  },
  {
    id: 'vibes-1',
    category: 'vibes',
    question: "Which one are you more drawn to: chaos or control?",
    options: ['Chaos', 'Control'],
    inputType: 'radio'
  },
  {
    id: 'skills-1',
    category: 'skills',
    question: "What tools can you use without thinking? (e.g., Photoshop, Excel, your phone camera)",
    inputType: 'text'
  },
  {
    id: 'media-1',
    category: 'media',
    question: "What's a piece of media that changed how you see the world?",
    inputType: 'text'
  }
]; 