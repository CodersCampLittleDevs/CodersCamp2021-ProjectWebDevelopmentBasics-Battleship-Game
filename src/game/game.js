import "./game.scss";
import "../styles.scss";
import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import { finishGame } from "./gameResult";
import { setTimer } from "./gameTimer";

const START_GAME_BTN = document.querySelector(".button--start");
let isGameStarted = false;

START_GAME_BTN.addEventListener("click", function () {
  isGameStarted = !isGameStarted;
  checkIfGameStarted(isGameStarted, START_GAME_BTN);
});

createGameBoards();
checkIfGameStarted(isGameStarted);
