export const saveToLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const loadFromLS = key => {
  return JSON.parse(localStorage.getItem(key));
};
