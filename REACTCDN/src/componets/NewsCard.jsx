import React from 'react';

const NewsCard = ({ title, description, image }) => (
  <div className="news-card">
    <img src={image} alt={title} className="news-image" />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default NewsCard;
