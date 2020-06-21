import React from 'react';
import { MdArrowUpward } from 'react-icons/md';
import Proptypes from 'prop-types';

import NewsItem from '../NewsItem/NewsItem.component';
import NewsDetails from '../NewsDetails/NewsDetails.component';

import './NewsCard.component.scss';
import Button from '../Button/Button.component';

const NewsCard = ({
  news: {
    author,
    created_at: createdAt,
    num_comments: comments,
    objectID: id,
    points,
    title,
    url,
  },
  upvoteHandler,
  hideNewsHandler,
}) => {
  return (
    <div className="news-card">
      {/* All the items related to news */}
      <section className="news-card__details">
        <div className="news-card__details__container1">
          <NewsItem caption="Comments" value={comments || 0} />
          <NewsItem caption="Vote Counts" value={points || 0} />
        </div>
        <div className="news-card__details__container2">
          <NewsItem
            caption="News Details"
            value={
              <NewsDetails
                title={title}
                url={url}
                author={author}
                createdAt={createdAt}
              />
            }
          />
        </div>
      </section>
      {/* User action for the news */}
      <section className="news-card__actions">
        <MdArrowUpward
          className="upvote-icon"
          size="24"
          onClick={() => upvoteHandler(id)}
        />
        <Button clickHandler={() => hideNewsHandler(id)}>Hide</Button>
      </section>
    </div>
  );
};

NewsCard.propTypes = {
  news: Proptypes.shape({
    author: Proptypes.string,
    created_at: Proptypes.string,
    num_comments: Proptypes.number,
    objectID: Proptypes.string,
    points: Proptypes.number,
    title: Proptypes.string,
    url: Proptypes.string,
  }).isRequired,
  upvoteHandler: Proptypes.func.isRequired,
  hideNewsHandler: Proptypes.func.isRequired,
};

export default NewsCard;
