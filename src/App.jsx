/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavBar from './components/NavBar/NavBar.component';
import Routes from './routes/routes';

import './App.scss';

function App({ store }) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Routes />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
