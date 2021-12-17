import "./game.scss";
import "../styles.scss";
import { createGameBoards, checkIsGameStarter } from "./createGameBoards";
import { finishGame } from "./gameResult";
import { setTimer } from "./gameTimer";

const START_GAME_BTN = document.querySelector(".startGameButton");
let isGameStarted = false;

START_GAME_BTN.addEventListener("click", function () {
  isGameStarted = !isGameStarted;
  checkIsGameStarter(isGameStarted, START_GAME_BTN);
});

createGameBoards();
checkIsGameStarter(isGameStarted);
