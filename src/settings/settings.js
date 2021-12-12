import "./settings.scss";
import { setDataInStorage } from "../utils/localStorage/localStorage.js";

const SAVE_BUTTON = document.querySelector(".savePlayerNameButton");
const INPUT = document.querySelector(".inputForPlayerName");

const clickToSavePlayerName = () => {
  setDataInStorage("playerName", INPUT.value);
};

SAVE_BUTTON.addEventListener("click", clickToSavePlayerName);
