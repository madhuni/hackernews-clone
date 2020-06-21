import React from 'react';

import PropTypes from 'prop-types';

import './NewsItem.component.scss';

const NewsItem = ({ caption, value }) => (
  <div className="news-item">
    <section className="news-item__caption t-caption">{caption}</section>
    <section className="news-item__value t-body-2">{value}</section>
  </div>
);

NewsItem.propTypes = {
  caption: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default NewsItem;
