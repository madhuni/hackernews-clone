import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import * as serviceWorker from './serviceWorker';
import { getItem, setItem } from './services/localStorage.service';
import configureAppStore from './store/configureAppStore';

import './index.scss';

/* Setup the modified entries if not already set */
if (getItem('MODIFIED_ENTRIES') === null) {
  setItem('MODIFIED_ENTRIES', {});
}

const store = configureAppStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
