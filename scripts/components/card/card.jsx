import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import LazyImage from '../ui/lazy-image';

import styles from './card-styles.css';

const Card = forwardRef(({ id, title, url, thumbnailUrl, className = '' }, ref) => (
  <div ref={ref} key={id} className={`${styles.card} ${className}`}>
    <a className={styles.link} href={url} rel="noopener noreferrer" target="_blank">
      <LazyImage url={thumbnailUrl} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </a>
  </div>
));

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  className: PropTypes.string
};

Card.defaultProps = { className: null };

export default Card;
