export const saveToLocalStorage = (states) => {
  try {
    Object.keys(states).forEach((key) => {
      localStorage.setItem(key, JSON.stringify(states[key]));
    });
  } catch {}
};

export const getDataFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
