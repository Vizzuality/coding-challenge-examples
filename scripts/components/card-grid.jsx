import React from 'react';
import Card from './card.jsx';
import styles from './card-grid-styles.css';
import useOnVisibleRef from './useOnVisibleRef';

const CardGrid = ({ photos, onOrderChange, onNextPage }) => {
  const ref = useOnVisibleRef(() => onNextPage(), { threshold: 0.5 }, [photos]);

  return (
    <React.Fragment>
      <button type="button" onClick={onOrderChange}>
        Title
      </button>
      <div className={styles.grid}>
        {photos &&
          photos.map((photo, index) => {
            const lastCard = index === photos.length - 1 ? ref : null;
            return <Card ref={lastCard} {...photo} key={index} className={styles.card} />;
          })}
      </div>
    </React.Fragment>
  );
};

export default CardGrid;
