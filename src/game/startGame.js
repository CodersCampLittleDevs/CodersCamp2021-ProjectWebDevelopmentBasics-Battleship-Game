import { checkIfGameStarted } from "./createGameBoards";
import { setTimer, stopTimer } from "./gameTimer";
import { displayModal } from "./gameOverModal";
import { getResult } from "./gameResult";

const PLAYER_BOARD = document.querySelector(".board__fields--computer");
export const START_GAME_BTN = document.querySelector(".button--start");
export let isGameStarted = false;

//It should be true when player randomized their ships, it is true only for test
const isGamePrepare = true;

export const startGame = () => {
  if (isGamePrepare === true) {
    isGameStarted = !isGameStarted;
    checkIfGameStarted(isGameStarted, START_GAME_BTN);
    PLAYER_BOARD.classList.remove("overlay");
    setTimer(10, finishGame);
  }
};

export const finishGame = () => {
  stopTimer();
  const { settlement = "", result = "", userPoints = "" } = getResult();
  displayModal(settlement, result, userPoints);
};
