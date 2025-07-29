import React from 'react';
import { CheckCircle, Sparkles, RefreshCw } from 'lucide-react';
import { quizResult } from '../data/quizData';

interface ResultScreenProps {
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ onRestart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted">
      <div className="max-w-2xl w-full space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-primary">
            {quizResult.treatment}
          </h1>
          
          <p className="text-lg text-foreground leading-relaxed">
            {quizResult.description}
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-card rounded-lg p-6 border shadow-sm">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Principais Benefícios:</span>
          </h3>
          
          <div className="grid gap-3">
            {quizResult.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <button className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors duration-200">
            🔥 QUERO DESPERTAR!
          </button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              💎 Avaliação gratuita disponível
            </p>
            <p className="text-xs text-muted-foreground">
              Entre em contato conosco para agendar sua consulta personalizada
            </p>
          </div>
        </div>

        {/* Restart Quiz */}
        <div className="text-center pt-4">
          <button
            onClick={onRestart}
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refazer o quiz</span>
          </button>
        </div>

        {/* Brand Footer */}
        <div className="text-center pt-4 border-t border-border">
          <h2 className="text-lg font-bold text-primary">CORPO SA</h2>
          <p className="text-sm text-muted-foreground">
            Sua jornada de transformação começa aqui
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;