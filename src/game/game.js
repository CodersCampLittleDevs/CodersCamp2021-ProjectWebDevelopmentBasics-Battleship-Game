import { setTimer, stopTimer } from "./gameTimer";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
import "./gameOverModal.scss";
import "../styles.scss";

import {
  setDataInStorage,
  getDataFromStorage,
} from "../utils/localStorage/localStorage";

setDataInStorage("computerPoints", 5);
setDataInStorage("userPoints", 8);

let time = setTimer(2, () => {
  stopGame();
});

function stopGame() {
  const { settlement, result, userPoints } = getResult();
  stopTimer();
  displayModal(settlement, result, userPoints);
}

setTimeout(() => {
  stopGame();
}, 3000);
