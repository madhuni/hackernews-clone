import React from 'react';

import NavBar from './components/NavBar/NavBar.component';
import PaginationButton from './components/PaginationButton/PaginationButton.component';
import Routes from './routes/routes';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <section className="pagination-actions">
        <PaginationButton type="back" clickHandler={() => null}>
          Previous
        </PaginationButton>
        <span className="divider" />
        <PaginationButton type="forward" clickHandler={() => null}>
          Next
        </PaginationButton>
      </section>
    </div>
  );
}

export default App;
