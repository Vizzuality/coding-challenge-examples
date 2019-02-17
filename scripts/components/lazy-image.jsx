import React, { useState } from 'react';
import styles from './lazy-image-styles.css';
import useOnVisibleRef from '../common/hooks/useOnVisibleRef';

const LazyImage = ({ url, alt, className, margin = '100px' }) => {
  const [loadedUrl, setLoadedUrl] = useState(null);
  const image = new Image();
  const imageEl = useOnVisibleRef(
    () => {
      if (url === loadedUrl) {
        return;
      }

      setLoadedUrl(null);
      image.onload = () => {
        if (image.src === url) {
          setLoadedUrl(url);
          image.src = null;
        }
      };
      image.src = url;
    },
    { rootMargin: margin },
    [url, margin]
  );

  return (
    <div
      ref={imageEl}
      className={[styles.container, loadedUrl && styles.loaded, className].join(' ')}
    >
      <div className={styles.loader} />
      <img src={loadedUrl} alt={alt} className={styles.image} />
    </div>
  );
};

export default LazyImage;
