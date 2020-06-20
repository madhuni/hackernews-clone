import React from 'react';

import NavBar from './components/NavBar/NavBar.component';
import Routes from './routes/routes';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
