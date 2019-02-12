import React, { useState, useEffect } from 'react';
import api from '../api';
import CardGrid from './card-grid';

const CardGridContainer = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => api.getPhotos(setPhotos), []);
  return <CardGrid photos={photos} />;
};

export default CardGridContainer;
