import { getItem, setItem } from './localStorage.service';

/**
 * This function will fetch the NEWS provided the page number.
 * @param {*} pageNumber - Page number
 * @returns {Promise<any>}
 */
export const getNews = (pageNumber = 1) => {
  const url = `https://hn.algolia.com/api/v1/search?page=${pageNumber}`;
  const modifiedEntries = getItem('MODIFIED_ENTRIES');
  return fetch(url)
    .then((res) => res.json())
    .then(({ hits }) => {
      const transformedData = hits
        /* Add additional `hide` property on each item for UI purposes */
        .map((item) => ({
          ...item,
          hide: false,
        }))
        /* If the item present in the modified entries, replace the original item with the modified one */
        .map((item) => {
          if (modifiedEntries[item.objectID] !== undefined) {
            return modifiedEntries[item.objectID];
          }
          return item;
        })
        /* Filter out all the hidden items */
        .filter((item) => !item.hide);
      return Promise.resolve(transformedData);
    });
};

/**
 * This function will update the localstorage with the modified entries.
 * A modified entry will have two cases:
 * 1. More votes are added
 * 2. Hidden action is taken
 *
 * `MODIFIED_ENTRIES` object will be updated in the localstorage with the new
 * updated value.
 * @param {*} modifiedEntry - Modified news item object
 */
export const updateModifiedEntries = (modifiedEntry) => {
  const modifiedEntries = getItem('MODIFIED_ENTRIES');
  const updatedEntries = {
    ...modifiedEntries,
    [modifiedEntry.objectID]: modifiedEntry,
  };
  setItem('MODIFIED_ENTRIES', updatedEntries);
};
