import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { QuizQuestion } from '../types/quiz';

interface QuestionScreenProps {
  question: QuizQuestion;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onAnswer: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  progress: number;
  canGoNext: boolean;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  progress,
  canGoNext
}) => {
  return (
    <div className="min-h-screen flex flex-col p-4 bg-gradient-to-br from-background to-muted">
      {/* Header */}
      <div className="w-full max-w-2xl mx-auto mb-8">
        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-4">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Question Counter */}
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            Pergunta {currentQuestion + 1} de {totalQuestions}
          </span>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl space-y-8 animate-fade-in">
          {/* Question */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-foreground leading-tight">
              {question.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onAnswer(index)}
                className={`quiz-option ${selectedAnswer === index ? 'selected' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                    selectedAnswer === index 
                      ? 'border-primary bg-primary' 
                      : 'border-muted-foreground'
                  }`}>
                    {selectedAnswer === index && (
                      <div className="w-2 h-2 bg-primary-foreground rounded-full m-0.5" />
                    )}
                  </div>
                  <span className="text-foreground">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full max-w-2xl mx-auto mt-8">
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            className="flex items-center space-x-2 px-4 py-2 text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <button
            onClick={onNext}
            disabled={!canGoNext}
            className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors font-semibold"
          >
            <span>
              {currentQuestion === totalQuestions - 1 ? 'Ver Resultado' : 'Próxima'}
            </span>
            {currentQuestion !== totalQuestions - 1 && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionScreen;