import React from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentPage } from '../../store/actions/page.action';

import Button from '../Button/Button.component';
import notFoundImage from '../../assets/images/not-found.svg';

import './NotFound.component.scss';

const NotFound = () => {
  const dispatch = useDispatch();
  const onNavigateToHomePage = () => dispatch(setCurrentPage(1));

  return (
    <div className="not-found">
      <img
        className="not-found__image"
        src={notFoundImage}
        width="300"
        alt="Not Found"
      />
      <p className="not-found__message t-body1">
        The page you are looking for is not found!
      </p>
      <Button clickHandler={onNavigateToHomePage}>Go Back to Home Page</Button>
    </div>
  );
};

export default NotFound;
