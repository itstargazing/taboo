export type TimelineTask = {
  id: string;
  month: string;
  tasks: string[];
  completed: boolean;
};

export type DocumentType = {
  id: string;
  title: string;
  type: 'resume' | 'recommendation' | 'personal-statement' | 'test-prep';
  level: 'beginner' | 'advanced';
  url: string;
  description: string;
};

export type EssayPrompt = {
  id: string;
  question: string;
  tips: string[];
  examples?: string[];
};

export type Scholarship = {
  id: string;
  title: string;
  deadline: string;
  format: 'online' | 'in-person';
  output: 'research' | 'creative' | 'competitive';
  eligibility: string[];
  tags: string[];
  description: string;
  url: string;
};

export type StudentGuide = {
  id: string;
  title: string;
  category: 'dorm' | 'food' | 'finance' | 'culture';
  content: string;
  checklist?: string[];
};

export type StudentVoice = {
  id: string;
  content: string;
  author: string;
  category: 'advice' | 'story' | 'tip';
};

export type Resource = {
  id: string;
  title: string;
  type: 'template' | 'prompt' | 'pdf' | 'tool';
  category: 'writing' | 'design' | 'organizing' | 'productivity';
  url: string;
  description: string;
  tags: string[];
};

export type WorryPost = {
  id: string;
  content: string;
  responses: {
    id: string;
    content: string;
    timestamp: string;
  }[];
  timestamp: string;
}; 