/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

import NewsCard from '../../components/NewsCard/NewsCard.component';

import { getNews, updateModifiedEntries } from '../../services/api.service';

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

  /**
   * This is a callback function which will trigger the upvote action on a card.
   * @param {*} id - Unique id of the news item
   */
  const onUpvote = (id) => {
    const modifiedNews = news.map((item) => {
      if (item.objectID === id) {
        const modifiedItem = { ...item, points: item.points + 1 };
        updateModifiedEntries(modifiedItem);
        return modifiedItem;
      }
      return item;
    });
    setNews(modifiedNews);
  };

  /**
   * This is a callback function which will trigger the hide action on a card.
   * @param {*} id - Unique id of the news item
   */
  const onHideNews = (id) => {
    const modifiedNews = news
      .map((item) => {
        if (item.objectID === id) {
          const modifiedItem = { ...item, hide: true };
          updateModifiedEntries(modifiedItem);
          return modifiedItem;
        }
        return item;
      })
      .filter((item) => !item.hide);

    setNews(modifiedNews);
    if (!modifiedNews.length) {
      setNoContent(true);
    }
  };

  return (
    <div className="news container">
      {loading && <div className="loading">Loading News...</div>}
      {noContent && <div className="no-content">No news found!</div>}
      {news.map((item) => (
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
