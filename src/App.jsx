import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PAGE_INCREMENT, PAGE_DECREMENT } from './store/actions/page.action';

import NavBar from './components/NavBar/NavBar.component';
import PaginationButton from './components/PaginationButton/PaginationButton.component';
import Routes from './routes/routes';

import './App.scss';

function App() {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  /* Callback function for Page increment/decrement action */
  const onIncrementPageNumber = () => dispatch({ type: PAGE_INCREMENT });
  const onDecrementPageNumber = () => dispatch({ type: PAGE_DECREMENT });

  /**
   * Component which defines the structure of the pagination buttons
   */
  const PaginationActions = () => (
    <section className="pagination-actions">
      <PaginationButton
        type="back"
        clickHandler={onDecrementPageNumber}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>
      <span className="divider" />
      <PaginationButton type="forward" clickHandler={onIncrementPageNumber}>
        Next
      </PaginationButton>
    </section>
  );

  return (
    <div className="App">
      <NavBar />
      <Routes />
      {currentPage !== null ? <PaginationActions /> : null}
    </div>
  );
}

export default App;
