import React, { useState, useEffect } from 'react';
import Card from './card.jsx';
import styles from './card-grid-styles.css';

const CardGrid = ({ photos }) => {
  const [sort, setSort] = useState(true);
  const [sortedPhotos, setSortedPhotos] = useState([]);

  useEffect(() => {
    const photosClone = [...photos];
    photosClone.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return titleA <= titleB || sort ? 1 : -1;
    });
    setSortedPhotos(photosClone);
  }, [photos, sort]);

  return (
    <React.Fragment>
      <button type="button" onClick={() => setSort(!sort)}>
        Title
      </button>
      <div className={styles.grid}>
        {sortedPhotos.map(photo => (
          <Card {...photo} key={photo.id} className={styles.card} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardGrid;
