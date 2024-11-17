import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Gerenciamento Inteligente de Energia',
    description: 'Controle o consumo de eletricidade em tempo real e otimize o uso de energia na sua residência, com insights personalizados sobre como reduzir desperdícios.',
  },
  {
    id: 2,
    title: 'Relatórios de Consumo',
    description: 'Receba relatórios detalhados para entender o uso de cada dispositivo, identificar padrões e tomar decisões informadas sobre o consumo energético.',
  },
  {
    id: 3,
    title: 'Notificações Personalizadas',
    description: 'Receba alertas em tempo real sobre consumo excessivo e dicas personalizadas para otimizar o uso de energia, ajudando a reduzir custos.',
  },
];

const CardSlider = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-indigo-50 py-20">
      <h2 className="text-3xl font-extrabold text-center font-lulo text-gray-900 mb-12 md:text-4xl">
        Ferramentas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl px-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">{card.title}</h3>
            <p className="text-lg text-gray-700 mb-6">{card.description}</p>
            <div className="flex-grow"></div>
            <div className="border-t-2 border-gray-300 pt-4 mt-6 text-center">
              <span className="text-sm text-gray-500 block">Tecnologia e inovação para seu conforto</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
