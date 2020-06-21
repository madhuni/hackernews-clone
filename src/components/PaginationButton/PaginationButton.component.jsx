import React from 'react';
import PropTypes from 'prop-types';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';

import './PaginationButton.component.scss';

const PaginationButton = ({ type, children, disabled, clickHandler }) => {
  const typeClass =
    type === 'forward'
      ? 'pagination-button--forward'
      : 'pagination-button--back';

  return (
    <button
      type="button"
      className={`pagination-button ${typeClass} ${
        disabled ? 'pagination-button--disabled' : ''
      }`}
      onClick={disabled ? () => null : clickHandler}
    >
      <span className="icon-container">
        {type === 'forward' ? (
          <MdArrowForward className="icon" size="24" />
        ) : (
          <MdArrowBack className="icon" size="24" />
        )}
      </span>
      <span className="children-container t-body1">{children}</span>
    </button>
  );
};

PaginationButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

PaginationButton.defaultProps = {
  type: 'forward',
  children: '',
  disabled: false,
};

export default PaginationButton;
