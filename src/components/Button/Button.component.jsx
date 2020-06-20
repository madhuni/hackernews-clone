import React from 'react';
import PropTypes from 'prop-types';

import './Button.component.scss';

const Button = ({ children, clickHandler, disabled }) => (
  <button
    className="button t-button"
    type="button"
    disabled={disabled}
    onClick={disabled ? () => null : clickHandler}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
