import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PAGE_INCREMENT, PAGE_DECREMENT } from './store/actions/page.action';

import NavBar from './components/NavBar/NavBar.component';
import Paginator from './components/Paginator/Paginator.component';
import Routes from './routes/routes';

import './App.scss';

function App() {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  /* Callback function for Page increment/decrement action */
  const onIncrementPageNumber = () => dispatch({ type: PAGE_INCREMENT });
  const onDecrementPageNumber = () => dispatch({ type: PAGE_DECREMENT });

  return (
    <div className="App">
      <NavBar />
      <Routes />
      {currentPage !== null ? (
        <Paginator
          onDecrementHandler={onDecrementPageNumber}
          onIncrementHandler={onIncrementPageNumber}
          backDisabled={currentPage === 1}
        />
      ) : null}
    </div>
  );
}

export default App;
