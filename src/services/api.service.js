/**
 * This function will fetch the NEWS provided the page number.
 * @param {*} pageNumber - Page number
 * @returns {Promise<any>}
 */
const getNews = (pageNumber = 1) => {
  const url = `https://hn.algolia.com/api/v1/search?page=${pageNumber}`;
  return fetch(url)
    .then((res) => res.json())
    .then(({ hits }) => {
      const transformedData = hits.map((hit) => ({
        ...hit,
        hide: false,
      }));
      return Promise.resolve(transformedData);
    });
};

export default getNews;
