import React from 'react';
import { hot } from 'react-hot-loader';
import CardGridContainer from './card-grid-container';
import styles from './app-styles.css';

const App = () => (
  <main className={styles.content}>
    <div className={styles.wrapper}>
      <CardGridContainer />
    </div>
  </main>
);

export default hot(module)(App);
