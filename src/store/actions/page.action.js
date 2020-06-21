/* Action Types */
export const PAGE_INCREMENT = 'PAGE_INCREMENT';
export const PAGE_DECREMENT = 'PAGE_DECREMENT';
export const CURRENT_PAGE = 'CURRENT_PAGE';

/* Action Creators */
export function setCurrentPage(currentPage) {
  return { type: CURRENT_PAGE, currentPage };
}
