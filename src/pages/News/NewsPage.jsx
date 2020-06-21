/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdTimeline } from 'react-icons/md';

import NewsCard from '../../components/NewsCard/NewsCard.component';

import { getNews } from '../../services/api.service';
import {
  getNewsResponse,
  upvoteNewsItem,
  hideNewsItem,
} from '../../store/actions/news.action';

import './NewsPage.scss';
import Trends from '../../components/Trends/Trends.component';

export default function NewsPage() {
  const [loading, setLoading] = useState(true);
  const [noContent, setNoContent] = useState(false);
  const [showTrends, setShowTrends] = useState(false);
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

  /**
   * This is callback function to toggle the trends-view to hide/show
   */
  const onToggleShowTrends = () => setShowTrends(!showTrends);

  /**
   * ShowTrends button component. This can be further pull into a separate file.
   *
   * I am leaving it as of now.
   */
  const ShowTrendsButton = () => (
    <div
      onClick={onToggleShowTrends}
      onKeyPress={onToggleShowTrends}
      role="button"
      tabIndex="0"
      className="show-trends"
    >
      <MdTimeline className="icon" size="24" />
      <span className="text t-subtitle1">Show Trends</span>
    </div>
  );

  /**
   * Trends View to show the chart
   */
  const TrendsView = () => (
    <section onClick={onToggleShowTrends} className="trends-view">
      <div onClick={(event) => event.stopPropagation()}>
        <h6 className="title t-h6">
          Trends b/w News ID (X-Axis) and Total Votes (Y-Axis)
        </h6>
        <Trends />
      </div>
    </section>
  );

  return (
    <div className="news container">
      {/* Loading Text */}
      {loading && <div className="loading">Loading News...</div>}
      {/* No Content Text */}
      {noContent && <div className="no-content">No news found!</div>}
      {/* Container to show the list of news */}
      {news.length ? (
        <div className="news__container">
          {/* Show Trends Button */}
          <ShowTrendsButton />
          {/* News list */}
          {news.map((item) => (
            <NewsCard
              key={item.objectID}
              news={item}
              upvoteHandler={() => onUpvote(item.objectID)}
              hideNewsHandler={onHideNews}
            />
          ))}
        </div>
      ) : null}
      {/* Overlay to show the trends graph */}
      {showTrends && <TrendsView />}
    </div>
  );
}
