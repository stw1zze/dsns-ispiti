import React, { useState } from 'react';

const flashCardsData = {
  'Рядовий[1] - Сержант[2]': [
    { question: 'Вопрос 1 для Рядовий-Сержант', answer: 'Ответ 1 для Рядовий-Сержант' },
    { question: 'Вопрос 2 для Рядовий-Сержант', answer: 'Ответ 2 для Рядовий-Сержант' },
  ],
  'Сержант[2] - Старшина[3]': [
    { question: 'Вопрос 1 для Сержант-Старшина', answer: 'Ответ 1 для Сержант-Старшина' },
    { question: 'Вопрос 2 для Сержант-Старшина', answer: 'Ответ 2 для Сержант-Старшина' },
  ],
  'Старшина[3] - Прапорщик[4]': [
    { question: 'Вопрос 1 для Старшина-Прапорщик', answer: 'Ответ 1 для Старшина-Прапорщик' },
    { question: 'Вопрос 2 для Старшина-Прапорщик', answer: 'Ответ 2 для Старшина-Прапорщик' },
  ],
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Рядовий[1] - Сержант[2]');
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div style={{ maxWidth: 600, margin: '20px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Флеш-карты для экзамена</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 20 }}>
        {Object.keys(flashCardsData).map((tabName) => (
          <button
            key={tabName}
            onClick={() => {
              setActiveTab(tabName);
              setFlippedCards({}); // сбросить все ответы при смене вкладки
            }}
            style={{
              padding: '10px 15px',
              cursor: 'pointer',
              borderBottom: activeTab === tabName ? '3px solid blue' : '3px solid transparent',
              background: 'none',
              border: 'none',
              fontWeight: activeTab === tabName ? 'bold' : 'normal',
              fontSize: 16,
            }}
          >
            {tabName}
          </button>
        ))}
      </div>

      <div>
        {flashCardsData[activeTab].map((card, index) => (
          <div
            key={index}
            onClick={() => handleFlip(index)}
            style={{
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 15,
              marginBottom: 10,
              cursor: 'pointer',
              userSelect: 'none',
              backgroundColor: flippedCards[index] ? '#e0f7fa' : '#fff',
              transition: 'background-color 0.3s',
            }}
          >
            {flippedCards[index] ? card.answer : card.question}
          </div>
        ))}
      </div>
    </div>
  );
}
