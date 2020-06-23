import React from 'react';
import PropTypes from 'prop-types';

import { getShortURL, getFormattedDate } from '../../services/utility.service';

import './NewsDetails.component.scss';

const NewsDetails = ({ title, url, author, createdAt }) => {
  const urlString = url ? `(${getShortURL(url)})` : '';
  return (
    <>
      <span className="t-body1">{title}</span>
      <a className="t-caption color-light" href={url}>
        {' '}
        {urlString}
      </a>
      <span>
        <span className="t-caption color-light"> by</span> {author}
      </span>
      <span>
        <span className="t-caption color-light"> on</span>{' '}
        {getFormattedDate(createdAt)}
      </span>
    </>
  );
};

NewsDetails.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  createdAt: PropTypes.string,
};

NewsDetails.defaultProps = {
  title: '',
  url: '',
  author: '',
  createdAt: '',
};

export default NewsDetails;
