import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../ui/dropdown';
import Card from '../card';
import { useOnVisibleRef } from '../../common/hooks';

import styles from './card-grid-styles.css';

const CardGrid = ({
  photos,
  fetching,
  fetched,
  sort,
  order,
  orderOptions,
  onOrderChange,
  onNextPage
}) => {
  const ref = useOnVisibleRef(() => onNextPage(), { threshold: 0.5 }, [photos]);
  const dropdownOptions = orderOptions.map(orderOption => ({
    value: orderOption,
    label: orderOption
  }));

  return (
    <div
      className={[
        styles.container,
        fetching ? styles.fetching : '',
        fetched ? styles.fetched : ''
      ].join(' ')}
    >
      <Dropdown
        className={styles.dropdown}
        name={`Sort by ${sort}:`}
        options={dropdownOptions}
        value={order}
        onChange={option => onOrderChange(option)}
      />
      <div className={styles.grid}>
        {photos &&
          photos.map((photo, index) => {
            const lastCard = index === photos.length - 1 ? ref : null;
            return <Card ref={lastCard} {...photo} key={photo.id} className={styles.card} />;
          })}
      </div>
    </div>
  );
};

CardGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetching: PropTypes.bool.isRequired,
  fetched: PropTypes.bool.isRequired,
  sort: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  orderOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onOrderChange: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired
};

export default CardGrid;
