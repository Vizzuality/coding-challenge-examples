import React, { useState, useEffect } from 'react';
import styles from './card-grid-styles.scss';

const CardGrid = ({ photos }) => {
  const [sort, setSort] = useState(true);
  const [sortedPhotos, setSortedPhotos] = useState([]);

  useEffect(() => {
    const sortedPhotos = [...photos];
    sortedPhotos.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return titleA <= titleB || sort ? 1 : -1;
    });
    setSortedPhotos(sortedPhotos);
  }, [photos, sort]);

  return (
    <React.Fragment>
      <button type="button" onClick={() => setSort(!sort)}>
        Title
      </button>
      <div className={styles.grid}>
        {sortedPhotos.map(photo => (
          <div key={photo.id}>
            <h3>{photo.title}</h3>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardGrid;
