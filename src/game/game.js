import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import { addShipsToBoard } from "./randomizationOfShipsPositions";
import { generateShipsArray } from "./shipsArray";
import { startGame, START_GAME_BTN } from "./startGame";
import { makeFieldsTargetable } from "./playerShooting";
import { setDataInStorage } from "../utils/localStorage/localStorage";
import { setGameboardPlayername } from "./setPlayerName";

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
setGameboardPlayername();

RANDOMIZE_BTN.addEventListener("click", function () {
  [playerEmptyFields, playerShips] = addShipsToBoard(true);
  playerState = generateShipsArray(playerShips);
  START_GAME_BTN.addEventListener("click", startGame);
  START_GAME_BTN.classList.remove("disabled");
  setDataInStorage("userPoints", 0);
  setDataInStorage("computerPoints", 0);
});
[computerEmptyFields, computerShips] = addShipsToBoard(false);
computerState = generateShipsArray(computerShips);

makeFieldsTargetable();
