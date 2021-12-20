import { setTimer, stopTimer } from "./gameTimer";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import { generateShipsArray } from "./shipsArray";
import "../styles.scss";
import "./game.scss";
import "./gameOverModal.scss";

const START_GAME_BTN = document.querySelector(".button--start");
const PLAYER_BOARD = document.querySelector(".board__fields--computer");
let isGameStarted = false;

START_GAME_BTN.addEventListener("click", function () {
  isGameStarted = !isGameStarted;
  checkIfGameStarted(isGameStarted, START_GAME_BTN);
  PLAYER_BOARD.classList.remove("overlay");
});

createGameBoards();
checkIfGameStarted(isGameStacrted, START_GAME_BTN);
