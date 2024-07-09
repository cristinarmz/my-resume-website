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
      description: 'View Website',
      imageUrl: '/images/dacodes1.png',
      url: 'https://www.dacodes.com',
      color: '#040848' 
    },
    {
      id: 2,
      title: 'Marketing Agency Website',
      description: 'View Website',
      imageUrl: '/images/viralco.png',
      url: 'https://www.viralco.mx',
      color: '#EA4335'
    },
    {
      id: 3,
      title: 'Luxury Leather Repair Company',
      description: 'View Website',
      imageUrl: '/images/everleather.png',
      url: 'https://www.everleather.co',
      color: '#E07D69'
    },
    {
        id: 4,
        title: 'Holistic Coach Platform',
        description: 'View Website',
        imageUrl: '/images/rosysandoval.png',
        url: 'https://www.descubretuser.com',
        color: '#C32361'
      },
      {
        id: 5,
        title: 'NGO Crowdfunding & Website',
        description: 'View Website',
        imageUrl: '/images/mexicoazul.png',
        url: 'https://www.mexicoazul.org',
        color: '#3F96FC'
      },
      {
        id: 6,
        title: 'Wedding Invitation',
        description: 'View Website',
        imageUrl: '/images/ayc.png',
        url: 'https://www.adrianaycarlos.com',
        color: '#8A985D'
      },
      {
        id: 7,
        title: 'Tech Podcast',
        description: 'View Website',
        imageUrl: '/images/holamundo.png',
        url: 'https://www.holamundopod.com',
        color: '#8C2CD3'
      },
       {
        id: 8,
        title: 'Internal Knowledge Hub Platform',
        description: 'View Website',
        imageUrl: '/images/dacodes2.png',
        url: 'https://wiki.dacodes.com',
        color: '#15D6CF' 
      },
          {
        id: 9,
        title: 'Pop Singers’ Website',
        description: 'View Website',
        imageUrl: '/images/prez.png',
        url: 'https://www.everleather.co',
        color: '#F92056' 
      },
      {
        id: 10,
        title: 'Swimwear E-Commerce',
        description: 'View Website',
        imageUrl: '/images/sela.png',
        url: 'https://selaswim.com',
        color: '#AC322E' 
      },
      {
        id: 11,
        title: 'Global network of Accountants',
        description: 'Deprecated Project',
        imageUrl: '/images/iecnet.png',
        color: '#013068' 
      },
      {
        id: 12,
        title: 'Baby Clothing E-Commerce',
        description: 'View Website',
        imageUrl: '/images/bicos.png',
        url: 'https://www.bicosebicos.com',
        color: '#996989' 
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
            url={item.url}
            imageUrl={item.imageUrl}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
