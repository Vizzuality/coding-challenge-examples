import React, { useState, useEffect } from 'react';
import api from '../api';
import CardGrid from './card-grid';

const CardGridContainer = () => {
  const [order, setOrder] = useState(true);
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    api.getPhotos(
      newPhotos => {
        setPhotos([...newPhotos, ...photos]);
      },
      { page, order }
    );
  }, [order, page]);

  return (
    <CardGrid
      photos={photos}
      onOrderChange={() => setOrder(!order)}
      onPageChange={() => setPage(page + 1)}
    />
  );
};

export default CardGridContainer;
