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
      imageUrl: '/images/dacodes1.png', // Assuming you move Fondo to public/images/
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: '/images/viralco.png',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of Project 3',
      imageUrl: '/images/everleather.png',
    },
  ];
  

  return (
    <section className="work">
      <div className="work-container">
        <div className="work-column dacodes">
          {workItems.slice(0, Math.ceil(workItems.length / 2)).map((item) => (
            <Card key={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl} />
          ))}
        </div>
        <div className="work-column viralco">
          {workItems.slice(Math.ceil(workItems.length / 2)).map((item) => (
            <Card key={item.id} title={item.title} description={item.description} imageUrl={item.imageUrl} />
          ))}
        </div>
      </div>
    
      
    </section>
  );
};

export default Work;
