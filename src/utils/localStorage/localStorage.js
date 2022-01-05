function setDataInStorage(key, value) {
  localStorage.setItem(key, value);
}

function getDataFromStorage(key) {
  return localStorage.getItem(key);
}

exports.setDataInStorage = setDataInStorage;
exports.getDataFromStorage = getDataFromStorage;
