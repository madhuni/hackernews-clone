/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { MdTimeline } from 'react-icons/md';

import Trends from '../../components/Trends/Trends.component';
import NewsCard from '../../components/NewsCard/NewsCard.component';
import NotFound from '../../components/NotFound/NotFound.component';

import { getNews } from '../../services/api.service';
import {
  getNewsResponse,
  upvoteNewsItem,
  hideNewsItem,
} from '../../store/actions/news.action';
import { setCurrentPage } from '../../store/actions/page.action';

import './NewsPage.scss';

export default function NewsPage() {
  /* Local state of the page */
  const [loading, setLoading] = useState(true);
  const [noContent, setNoContent] = useState(false);
  const [showTrends, setShowTrends] = useState(false);
  /* State from Store */
  const news = useSelector((state) => state.news);
  const currentPage = useSelector((state) => state.currentPage);
  /* Router related constants */
  const { id } = useParams();
  const history = useHistory();
  /* Dispatch function */
  const dispatch = useDispatch();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(setCurrentPage(id));
      history.push(`/${id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id === undefined) {
      history.push(`/1`);
    } else if (currentPage === null) {
      history.push(`/not-found`);
    } else {
      history.push(`/${currentPage}`);
    }
    if (Number(id) === currentPage) {
      setLoading(true);
      getNews(currentPage)
        .then((res) => {
          setLoading(false);
          dispatch(getNewsResponse(res));
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [history, currentPage, dispatch, id]);

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
      {currentPage === null ? (
        <NotFound />
      ) : (
        <>
          {/* Loading Text */}
          {loading && <div className="loading">Loading News...</div>}
          {/* No Content Text */}
          {noContent && <div className="no-content">No news found!</div>}
          {/* Container to show the list of news */}
          <div className="news__container">
            {news.length && !loading ? (
              <>
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
              </>
            ) : null}
            {/* Show Trends Button */}
          </div>
          {/* Overlay to show the trends graph */}
          {showTrends && <TrendsView />}
        </>
      )}
    </div>
  );
}
