import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';
import { getItem, setItem } from './services/localStorage.service';

import './index.scss';

/* Setup the modified entries if not already set */
if (getItem('MODIFIED_ENTRIES') === null) {
  setItem('MODIFIED_ENTRIES', {});
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
