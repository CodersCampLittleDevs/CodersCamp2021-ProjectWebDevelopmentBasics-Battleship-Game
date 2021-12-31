import { setTimer, stopTimer } from "./gameTimer";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import { addShipsToBoard } from "./randomizationOfShipsPositions";
import { generateShipsArray } from "./shipsArray";
import { startGame, isGameStarted, START_GAME_BTN } from "./startGame";
import "../styles.scss";
import "./game.scss";
import "./gameOverModal.scss";

const RANDOMIZE_BTN = document.querySelector(".actions__button-randomize");

let playerState;
let playerShips;
let playerEmptyFields;

let computerState;
let computerShips;
let computerEmptyFields;

createGameBoards();
checkIfGameStarted(isGameStarted, START_GAME_BTN);
START_GAME_BTN.addEventListener("click", startGame);

RANDOMIZE_BTN.addEventListener("click", function () {
  [playerEmptyFields, playerShips] = addShipsToBoard(true);
  playerState = generateShipsArray(playerShips);
});
[computerEmptyFields, computerShips] = addShipsToBoard(false);
computerState = generateShipsArray(computerShips);
