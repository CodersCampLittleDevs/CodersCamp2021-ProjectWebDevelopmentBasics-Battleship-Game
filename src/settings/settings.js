import "./settings.scss";
import bodyStyles from "../styles.scss";
import {
  setDataInStorage,
  getDataFromStorage,
} from "../utils/localStorage/localStorage.js";

const SAVE_BUTTON = document.querySelector(".section__button--save");
const INPUT = document.querySelector(".section__input--playerName");

const onButtonClick = () => {
  setDataInStorage("playerName", INPUT.value);
};

function setPlayerName() {
  
  const playerName = getDataFromStorage("playerName");

  if(playerName) {
    INPUT.value = playerName;
  }
}

setPlayerName();
SAVE_BUTTON.addEventListener("click", onButtonClick);
