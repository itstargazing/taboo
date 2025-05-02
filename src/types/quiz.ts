export type QuestionType = {
  id: string;
  category: 'interests' | 'habits' | 'vibes' | 'skills' | 'media';
  question: string;
  options?: string[];
  inputType: 'text' | 'select' | 'radio';
};

export type AnswerType = {
  questionId: string;
  answer: string;
};

export type QuizState = {
  currentQuestionIndex: number;
  answers: AnswerType[];
  isComplete: boolean;
}; 