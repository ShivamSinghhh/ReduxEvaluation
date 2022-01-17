/*
@params {String } key
*/

export const loadData = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
};

export const saveInfo = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
