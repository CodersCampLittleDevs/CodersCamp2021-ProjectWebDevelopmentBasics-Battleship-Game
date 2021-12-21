import { setTimer, stopTimer } from "./gameTimer";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import { generateShipsArray } from "./shipsArray";
import { startGame, isGameStarted, START_GAME_BTN } from "./startGame";
import "../styles.scss";
import "./game.scss";
import "./gameOverModal.scss";

createGameBoards();
checkIfGameStarted(isGameStarted, START_GAME_BTN);
START_GAME_BTN.addEventListener("click", startGame);
