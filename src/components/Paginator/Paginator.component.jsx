import React from 'react';
import PropTypes from 'prop-types';

import PaginationButton from '../PaginationButton/PaginationButton.component';

import './Paginator.component.scss';

const Paginator = ({
  onDecrementHandler,
  onIncrementHandler,
  forwardDisabled,
  backDisabled,
}) => (
  <section className="paginator">
    <PaginationButton
      type="back"
      clickHandler={onDecrementHandler}
      disabled={backDisabled}
    >
      Previous
    </PaginationButton>
    <span className="divider" />
    <PaginationButton
      type="forward"
      clickHandler={onIncrementHandler}
      disabled={forwardDisabled}
    >
      Next
    </PaginationButton>
  </section>
);

Paginator.propTypes = {
  onDecrementHandler: PropTypes.func.isRequired,
  onIncrementHandler: PropTypes.func.isRequired,
  forwardDisabled: PropTypes.bool,
  backDisabled: PropTypes.bool,
};

Paginator.defaultProps = {
  forwardDisabled: false,
  backDisabled: false,
};

export default Paginator;
