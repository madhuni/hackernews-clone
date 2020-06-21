import {
  PAGE_INCREMENT,
  PAGE_DECREMENT,
  CURRENT_PAGE,
} from '../actions/page.action';

const initialState = 1;

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE_INCREMENT:
      return state + 1;
    case PAGE_DECREMENT:
      return state - 1;
    case CURRENT_PAGE:
      if (typeof action.currentPage !== 'number') {
        return undefined;
      }
      return action.currentPage;
    default:
      return state;
  }
}
