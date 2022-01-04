import { setTimer, stopTimer } from "./gameTimer";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import { addShipsToBoard } from "./randomizationOfShipsPositions";
import { generateShipsArray } from "./shipsArray";
import { startGame, isGameStarted, START_GAME_BTN } from "./startGame";
import { makeFieldsTargetable } from "./playerShooting";
import "../styles.scss";
import { addEasterEgg } from "../easterEgg/easterEgg";
import "./game.scss";
import "./gameOverModal.scss";

const RANDOMIZE_BTN = document.querySelector(".actions__button-randomize");

export let playerState;
export let playerShips;
export let playerEmptyFields;

export let computerState;
export let computerShips;
export let computerEmptyFields;
addEasterEgg();
createGameBoards();
checkIfGameStarted(isGameStarted);
checkIfGameStarted(isGameStarted, START_GAME_BTN);
START_GAME_BTN.addEventListener("click", startGame);

RANDOMIZE_BTN.addEventListener("click", function () {
  [playerEmptyFields, playerShips] = addShipsToBoard(true);
  playerState = generateShipsArray(playerShips);
  START_GAME_BTN.classList.remove("disabled");
});
[computerEmptyFields, computerShips] = addShipsToBoard(false);
computerState = generateShipsArray(computerShips);
console.log(computerShips);

makeFieldsTargetable();
