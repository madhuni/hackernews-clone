/* Action types */
export const GET_NEWS_RESPONSE = 'GET_NEWS_RESPONSE';
export const HIDE_NEWS_ITEM = 'HIDE_NEWS_ITEM';
export const UPVOTE_NEWS_ITEM = 'UPVOTE_NEWS_ITEM';

/* Action creators */
export function getNewsResponse(response) {
  return { type: GET_NEWS_RESPONSE, response };
}

export function hideNewsItem(newsItemId) {
  return { type: HIDE_NEWS_ITEM, newsItemId };
}

export function upvoteNewsItem(newsItemId) {
  return { type: UPVOTE_NEWS_ITEM, newsItemId };
}
