import React from 'react';
import styles from './card-styles.css';

const Card = ({ id, title, thumbnailUrl, className }) => (
  <div key={id} className={`${styles.card} ${className}`}>
    <h3>{title}</h3>
    <img src={thumbnailUrl} alt={title} />
  </div>
);

export default Card;
