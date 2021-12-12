export function setDataInStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getDataFromStorage(key) {
  localStorage.getItem(key);
}
