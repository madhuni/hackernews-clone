import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar.component';
import Routes from './routes/routes';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
