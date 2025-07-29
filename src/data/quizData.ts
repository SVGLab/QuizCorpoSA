import { QuizQuestion, QuizResult } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo estético?",
    options: [
      "Rejuvenescimento facial",
      "Redução de gordura localizada",
      "Melhora da textura da pele",
      "Tonificação muscular"
    ]
  },
  {
    id: 2,
    question: "Qual região do corpo você gostaria de tratar?",
    options: [
      "Rosto e pescoço",
      "Abdômen e flancos",
      "Braços e pernas",
      "Glúteos e coxas"
    ]
  },
  {
    id: 3,
    question: "Você tem tempo disponível para sessões regulares?",
    options: [
      "Sim, posso fazer sessões semanais",
      "Prefiro tratamentos mensais",
      "Busco resultados rápidos",
      "Tenho pouco tempo disponível"
    ]
  },
  {
    id: 4,
    question: "Qual é sua experiência com tratamentos estéticos?",
    options: [
      "Primeira vez",
      "Já fiz alguns procedimentos",
      "Sou experiente em tratamentos",
      "Busco algo inovador"
    ]
  },
  {
    id: 5,
    question: "Qual resultado você espera alcançar?",
    options: [
      "Melhora gradual e natural",
      "Resultados visíveis rapidamente",
      "Prevenção do envelhecimento",
      "Transformação significativa"
    ]
  }
];

export const quizResult: QuizResult = {
  treatment: "CRIODERMIS 2.0",
  description: "Com base nas suas respostas, o CRIODERMIS 2.0 é o tratamento ideal para você! Esta tecnologia revolucionária combina crioterapia com bioestimulação para resultados excepcionais.",
  benefits: [
    "Rejuvenescimento facial profundo",
    "Redução de rugas e linhas de expressão",
    "Melhora da textura e elasticidade da pele",
    "Estímulo natural de colágeno",
    "Resultados visíveis desde a primeira sessão",
    "Tratamento não invasivo e confortável"
  ]
};