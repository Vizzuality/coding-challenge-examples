import React from 'react';
import Card from './card.jsx';
import Dropdown from './dropdown';
import useOnVisibleRef from '../common/hooks/useOnVisibleRef';

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

export default CardGrid;
