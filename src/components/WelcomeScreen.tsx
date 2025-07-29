import React from 'react';
import { User } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-primary-foreground" />
          </div>
        </div>

        {/* Brand */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-primary">CORPO SA</h1>
          <div className="w-12 h-0.5 bg-primary mx-auto"></div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Olá! Bem-vindo(a) ao nosso quiz personalizado
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Vamos descobrir juntos qual é o tratamento estético ideal para você! 
            Responda algumas perguntas rápidas e receba uma recomendação personalizada 
            baseada no seu perfil e objetivos.
          </p>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 text-lg"
        >
          COMEÇAR QUIZ
        </button>

        {/* Info */}
        <p className="text-sm text-muted-foreground">
          ⏱️ Leva apenas 2 minutos para completar
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;