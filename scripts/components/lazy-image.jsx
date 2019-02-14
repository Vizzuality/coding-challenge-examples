import React, { useState, useEffect } from 'react';
import styles from './lazy-image-styles.css';

const LazyImage = ({ url, alt, className }) => {
  const [loadedUrl, setLoadedUrl] = useState(null);

  const image = new Image();

  useEffect(() => {
    setLoadedUrl(null);
    image.onload = () => {
      if (image.src === url) setLoadedUrl(url);
    };
    image.src = url;
    return () => {
      image.src = null;
      setLoadedUrl(null);
    };
  }, [url]);

  return (
    <div className={[styles.container, loadedUrl && styles.loaded, className].join(' ')}>
      <div className={styles.loader} />
      <img src={loadedUrl} alt={alt} className={styles.image} />
    </div>
  );
};

export default LazyImage;
