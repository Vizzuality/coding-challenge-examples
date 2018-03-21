import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './components/app';
import './index.css';

const HotRootComponent = hot(module)(App);

ReactDOM.render(<HotRootComponent />, document.getElementById('root'));
