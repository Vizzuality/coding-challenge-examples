import React, { forwardRef } from 'react';
import LazyImage from './lazy-image.jsx';

import styles from './card-styles.css';

const Card = forwardRef(({ id, title, url, thumbnailUrl, className }, ref) => (
  <div ref={ref} key={id} className={`${styles.card} ${className}`}>
    <a className={styles.link} href={url} rel="noopener noreferrer" target="_blank">
      <LazyImage url={thumbnailUrl} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </a>
  </div>
));

export default Card;
