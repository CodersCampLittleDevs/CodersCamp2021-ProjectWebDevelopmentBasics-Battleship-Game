const { getDataFromStorage } = require("../utils/localStorage/localStorage.js");

function getResult() {
  const computerPoints = +getDataFromStorage("computerPoints");
  const userPoints = +getDataFromStorage("userPoints");
  if (userPoints > computerPoints) {
    settlement = "Victory";
    result = "win";
  } else {
    settlement = "Defeat";
    result = "lose";
  }
  return { settlement, result, userPoints };
}

exports.getResult = getResult;
