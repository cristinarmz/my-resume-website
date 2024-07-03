// src/components/Work.js

import React from 'react';
import './Work.css'; // Import CSS file for component styling
import Card from './Card'; // Assuming you have a Card component

const Work = () => {
  // Assuming you have an array of work items or data
  const workItems = [
    {
      id: 1,
      title: 'Software Development Company',
      description: 'Description of Project 1',
      imageUrl: '/images/dacodes1.png',
      color: '#040848' // Color for this card
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: '/images/viralco.png',
      color: '#EA4335' // Color for this card
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      imageUrl: '/images/everleather.png',
      color: '#E07D69' // Color for this card
    },
    {
        id: 4,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/rosysandoval.png',
        color: '#C32361' // Color for this card
      },
      {
        id: 5,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/mexicoazul.png',
        color: '#3F96FC' // Color for this card
      },
      {
        id: 6,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/ayc.png',
        color: '#8A985D' // Color for this card
      },
      {
        id: 7,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/holamundo.png',
        color: '#8C2CD3' // Color for this card
      },
       {
        id: 8,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/dacodes2.png',
        color: '#15D6CF' // Color for this card
      },
          {
        id: 9,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/prez.png',
        color: '#F92056' // Color for this card
      },
      {
        id: 10,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/sela.png',
        color: '#AC322E' // Color for this card
      },
      {
        id: 11,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/iecnet.png',
        color: '#013068' // Color for this card
      },
      {
        id: 12,
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/images/bicos.png',
        color: '#996989' // Color for this card
      },
      
  ];

  return (
    <section className="work">
      <div className="work-container">
        {workItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
