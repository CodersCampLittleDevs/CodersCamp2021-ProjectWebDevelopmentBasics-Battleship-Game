const { styles } = require("./settings.scss");
const { bodyStyle } = require("../styles.scss");
const {
  setDataInStorage,
  getDataFromStorage,
} = require("../utils/localStorage/localStorage.js");

const SAVE_BUTTON = document.querySelector(".section__button--save");
const INPUT = document.querySelector(".section__input--playerName");

const onButtonClick = () => {
  setDataInStorage("playerName", INPUT.value);
};

const setPlayerName = () => {
  const playerName = getDataFromStorage("playerName");

  if (playerName) {
    INPUT.value = playerName;
  }
};

setPlayerName();
SAVE_BUTTON.addEventListener("click", onButtonClick);

exports.onButtonClick = onButtonClick;
exports.setPlayerName = setPlayerName;
