export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface QuizResult {
  treatment: string;
  description: string;
  benefits: string[];
}

export type QuizState = 'welcome' | 'questions' | 'result';