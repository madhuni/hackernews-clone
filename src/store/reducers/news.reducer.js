import {
  GET_NEWS_RESPONSE,
  HIDE_NEWS_ITEM,
  UPVOTE_NEWS_ITEM,
} from '../actions/news.action';
import { updateModifiedEntries } from '../../services/api.service';

/* Define the initial state of the app */
const initialState = [];

/* Setup reducer function for managing news state */
export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_RESPONSE:
      return [...action.response];
    case HIDE_NEWS_ITEM:
      return state
        .map((item) => {
          if (item.objectID === action.newsItemId) {
            const modifiedItem = { ...item, hide: true };
            updateModifiedEntries(modifiedItem); // side-effect to update the localstorage
            return modifiedItem;
          }
          return item;
        })
        .filter((item) => !item.hide);
    case UPVOTE_NEWS_ITEM:
      return state.news.map((item) => {
        if (item.objectID === action.newsItemId) {
          const modifiedItem = { ...item, points: item.points + 1 };
          updateModifiedEntries(modifiedItem); // side-effect to update the localstorage
          return modifiedItem;
        }
        return item;
      });
    default:
      return state;
  }
}
