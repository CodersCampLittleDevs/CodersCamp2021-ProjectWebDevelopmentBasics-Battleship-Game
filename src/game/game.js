import "./game.scss";
import "../styles.scss";
import { createGameBoards, checkIsGameStarter } from "./createGameBoards";
import { finishGame } from "./gameResult";
import { setTimer } from "./gameTimer";

const startGameBtn = document.querySelector(".startGameButton");
let isGameStarted = false;

startGameBtn.addEventListener("click", function () {
  isGameStarted = !isGameStarted;
  checkIsGameStarter(isGameStarted, startGameBtn);
});

createGameBoards();
checkIsGameStarter(isGameStarted);
