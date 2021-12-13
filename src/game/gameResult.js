import { displayModal } from "./gameOverModal";
import { stopTimer } from "./gameTimer";
import { getDataFromStorage } from "../utils/localStorage/localStorage.js";

export function finishGame() {
  let settlement;
  let result;
  const computerPoints = getDataFromStorage("computerPoints");
  const userPoints = getDataFromStorage("userPoints");
  if (userPoints > computerPoints) {
    settlement = "Victory";
    result = "win";
  } else {
    settlement = "Defeat";
    result = "lose";
  }
  stopTimer();
  displayModal(settlement, result, userPoints);
}
