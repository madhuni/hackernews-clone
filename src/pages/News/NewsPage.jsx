/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import NewsCard from '../../components/NewsCard/NewsCard.component';

import getNews from '../../services/api.service';

import './NewsPage.scss';

export default function NewsPage() {
  const [loading, setLoading] = useState(true);
  const [noContent, setNoContent] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
      .then((res) => {
        setLoading(false);
        if (!res.length) {
          setNoContent(true);
        }
        setNews(res);
      })
      .catch(() => {
        setLoading(false);
        setNoContent(true);
        setNews([]);
      });
  }, []);

  const onUpvote = (id) => console.log('upvote!', id);
  const onHideNews = (id) => console.log('hide!', id);

  return (
    <div className="news container">
      {loading && <div className="loading">Loading News...</div>}
      {noContent && <div className="no-content">No news found!</div>}
      {news.map((item) => (
        <NewsCard
          key={item.objectId}
          news={item}
          upvoteHandler={() => onUpvote(item.objectID)}
          hideNewsHandler={onHideNews}
        />
      ))}
    </div>
  );
}
