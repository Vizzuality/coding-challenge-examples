import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useOnClickOutside } from '../../../common/hooks';

import styles from './dropdown-styles.css';

const Dropdown = ({ name, value, options, onChange, className }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setVisible(false));

  const availableOptions = options.filter(option => option.value !== value);
  return (
    <div
      ref={ref}
      className={[styles.container, visible && styles.visible, className].join(' ')}
      onClick={() => setVisible(!visible)}
    >
      <p className={styles.label}>{name}</p>
      <div className={styles.dropdown}>
        <p className={styles.value}>{value}</p>
        <ul className={styles.options} name={name} value={value}>
          {availableOptions.map(option => (
            <li className={styles.option} key={option.value} onClick={() => onChange(option.value)}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

Dropdown.defaultProps = { className: null };

export default Dropdown;
