import React from 'react';
import flowers from 'data/flowers';

import Title from 'views/components/Title/Title';
import Card from 'views/components/Card/Card';

import styles from './dashboard.module.scss';

const Dashboard = () => {
  // sort array alphabetically by value
  const sortedFlowers = flowers.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const isNotMobile = (window.innerWidth >= 700);

  return (
    <>
      <Title>Your Herbarium</Title>
      <section className={styles['cards-grid']}>
        {sortedFlowers.map((flower) => (
          <Card
            key={flower.id}
            title={flower.name}
            description={flower.description}
            temperature={flower.temperature}
            humidity={flower.humidity}
            color={flower.color}
            image={flower.image}
            open={isNotMobile ? true : false}
          />
        ))}
      </section>
    </>
  )
};

export default Dashboard;