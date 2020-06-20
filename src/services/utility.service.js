/**
 * This function will provide the shortened URL
 * @param {*} url - String value of the URL to be shortened
 */
export const getShortURL = (url) => {
  if (url) {
    const [scheme, domain] = url.split('/').filter((item) => item !== '');
    return `${scheme}//${domain}`;
  }
  return '';
};

/**
 * This function will format the date.
 * @param {*} dateString - DateTime string
 */
export const getFormattedDate = (dateString) => {
  const monthsShortName = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };
  const date = new Date(dateString);
  return `${date.getDate()}th ${
    monthsShortName[date.getMonth() + 1]
  }, ${date.getFullYear()}`;
};
