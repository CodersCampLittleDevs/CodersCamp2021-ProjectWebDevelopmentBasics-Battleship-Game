import "./settings.scss";
import { setDataInStorage } from "../utils/localStorage/localStorage.js";

const SAVE_BUTTON = document.querySelector(".section__saveButton");
const INPUT = document.querySelector(".section__input--playerName");

const clickToSavePlayerName = () => {
  setDataInStorage("playerName", INPUT.value);
};

SAVE_BUTTON.addEventListener("click", clickToSavePlayerName);
