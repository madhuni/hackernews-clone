/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsCard from '../../components/NewsCard/NewsCard.component';

import { getNews } from '../../services/api.service';
import {
  getNewsResponse,
  upvoteNewsItem,
  hideNewsItem,
} from '../../store/actions/news.action';

import './NewsPage.scss';

export default function NewsPage() {
  const [loading, setLoading] = useState(true);
  const [noContent, setNoContent] = useState(false);
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    getNews()
      .then((res) => {
        setLoading(false);
        dispatch(getNewsResponse(res));
      })
      .catch(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!news.length && !loading) {
      setNoContent(true);
    } else {
      setNoContent(false);
    }
  }, [news, loading]);

  /**
   * This is a callback function which will trigger the upvote action on a card.
   * @param {*} id - Unique id of the news item
   */
  const onUpvote = (newsItemId) => dispatch(upvoteNewsItem(newsItemId));

  /**
   * This is a callback function which will trigger the hide action on a card.
   * @param {*} id - Unique id of the news item
   */
  const onHideNews = (newsItemId) => dispatch(hideNewsItem(newsItemId));

  return (
    <div className="news container">
      {loading && <div className="loading">Loading News...</div>}
      {noContent && <div className="no-content">No news found!</div>}
      {!noContent &&
        news.map((item) => (
          <NewsCard
            key={item.objectID}
            news={item}
            upvoteHandler={() => onUpvote(item.objectID)}
            hideNewsHandler={onHideNews}
          />
        ))}
    </div>
  );
}
