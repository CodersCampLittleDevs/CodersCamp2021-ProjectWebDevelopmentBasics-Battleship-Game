import { setTimer, stopTimer } from "./gameTimer";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import { addShipsToBoard } from "./randomizationOfShipsPositions";
import "../styles.scss";
import "./game.scss";
import "./gameOverModal.scss";

const START_GAME_BTN = document.querySelector(".button--start");
const RANDOMIZE_BTN = document.querySelector(".actions__button-randomize");
let isGameStarted = false;

START_GAME_BTN.addEventListener("click", function () {
  isGameStarted = !isGameStarted;
  checkIfGameStarted(isGameStarted, START_GAME_BTN);
});

RANDOMIZE_BTN.addEventListener("click", function () {
  addShipsToBoard(true);
});

createGameBoards();
checkIfGameStarted(isGameStarted, START_GAME_BTN);

// only for test
addShipsToBoard(false);
