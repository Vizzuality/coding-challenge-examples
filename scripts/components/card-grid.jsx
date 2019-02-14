import React from 'react';
import Card from './card.jsx';
import styles from './card-grid-styles.css';

const CardGrid = ({ photos, onOrderChange, onPageChange }) => {
  setTimeout(() => onPageChange(), 2000);
  return (
    <React.Fragment>
      <button type="button" onClick={onOrderChange}>
        Title
      </button>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <Card {...photo} key={index} className={styles.card} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardGrid;
