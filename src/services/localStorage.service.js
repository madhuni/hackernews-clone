export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    /* Leaving the catch block */
  }
};

export const getItem = (key) => {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return undefined;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    /* Leaving the catch block */
  }
};

export const clearStorage = () => {
  try {
    localStorage.clear();
  } catch (error) {
    /* Leaving the catch block */
  }
};
