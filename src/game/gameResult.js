const { getDataFromStorage } = require("../utils/localStorage/localStorage.js");

function getResult() {
  let settlement;
  let result;
  const computerPoints = getDataFromStorage("computerPoints");
  const userPoints = getDataFromStorage("userPoints");
  if (userPoints > computerPoints) {
    settlement = "Victory";
    result = "win";
  } else {
    settlement = "Defeat";
    result = "lose";
  }
    
}

exports.getResult = getResult;
