import "./settings.scss";
import bodyStyles from "../styles.scss";
import {
  setDataInStorage,
  getDataFromStorage,
} from "../utils/localStorage/localStorage.js";

const SAVE_BUTTON = document.querySelector(".section__button--save");
const INPUT = document.querySelector(".section__input--playerName");

const onbuttonClick = () => {
  setDataInStorage("playerName", INPUT.value);
};

function getPlayerNameIfExists() {
  if (localStorage.length > 0) {
    INPUT.value = getDataFromStorage("playerName");
  }
}

getPlayerNameIfExists();
SAVE_BUTTON.addEventListener("click", onbuttonClick);
