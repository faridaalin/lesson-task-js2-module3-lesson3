export const userKey = "user";
export const token = "token";

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getToStorage = (key) => {
  const value = localStorage.getItem(key);

  !value ? [] : JSON.parse(value);
};
