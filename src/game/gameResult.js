import { displayModal } from "./gameOverModal";
import { stopTime } from "./gameTimer";

export function finishGame() {
  let settlement;
  let result;
  const computerPoints = window.localStorage.getItem("computerPoints");
  const userPoints = window.localStorage.getItem("userPoints");
  if (userPoints > computerPoints) {
    settlement = "Victory";
    result = "win";
  } else {
    settlement = "Defeat";
    result = "lose";
  }
  stopTime();
  displayModal(settlement, result, userPoints);
}
