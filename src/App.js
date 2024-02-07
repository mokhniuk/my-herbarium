import React from 'react';
import './style.css';

import flowers from './data/flowers';
import Title from './components/Title/Title';
import Card from './components/Card/Card';

// TODO:
// - sort flowers alphabetically
// - save values to localstorage
// - add stories
// - add tests
// - write questions
// - write tasks

export default function App() {
  return (
    <>
      <Title>Your Herbarium</Title>

      <section className="cards-grid">
        {flowers.map((flower) => (
          <Card
            key={flower.id}
            title={flower.name}
            description={flower.description}
            temperature={flower.temperature}
            humidity={flower.humidity}
            color={flower.color}
            image={flower.image}
          />
        ))}
      </section>
    </>
  );
}
