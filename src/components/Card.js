// src/components/Card.js

import React from 'react';
import './Card.css'; // Assuming you have a CSS file for Card styling

const Card = ({ title, description, imageUrl, color }) => {
  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
