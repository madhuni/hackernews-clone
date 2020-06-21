import { combineReducers } from 'redux';

import newsReducer from './news.reducer';
import pageReducer from './page.reducer';

const appStore = combineReducers({
  news: newsReducer,
  currentPage: pageReducer,
});

export default appStore;
