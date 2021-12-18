import { setTimer, stopTimer } from "./gameTimer";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
<<<<<<< HEAD
import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import "../styles.scss";
import "./game.scss";
import "./gameOverModal.scss";

const START_GAME_BTN = document.querySelector(".button--start");
let isGameStarted = false;

START_GAME_BTN.addEventListener("click", function () {
  isGameStarted = !isGameStarted;
  checkIfGameStarted(isGameStarted, START_GAME_BTN);
});

createGameBoards();
checkIfGameStarted(isGameStarted);
=======
import "./gameOverModal.scss";
import "../styles.scss";
>>>>>>> master
