import { computerState, computerShips, computerEmptyFields } from "./game";
import { computerMove } from "./computerShooting";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
import { stopTimer } from "./gameTimer";
import { saveMatchResult } from "../highscores/highscoresState";
import {
  setDataInStorage,
  getDataFromStorage,
} from "../utils/localStorage/localStorage";

const COMPUTER_BOARD = document.querySelector(".board__fields--computer");
function hitField() {
  event.target.removeEventListener("click", hitField);
  event.target.style.cursor = "not-allowed";
  const fieldName = event.target.dataset.fieldName;
  const fieldOnBoard = COMPUTER_BOARD.querySelector(
    `[data-field-name=${fieldName}`
  );
  let fieldIndex = computerShips.findIndex(
    (ship) => ship.fieldName === fieldName
  );
  if (fieldIndex >= 0) {
    const shipName = computerShips[fieldIndex].shipName;
    computerShips.splice(fieldIndex, 1);
    let ship = computerState.ships.find((ship) => ship.shipName === shipName);
    let field = ship.fields.findIndex((field) => field.name === fieldName);
    ship.fields[field].hit = true;
    const isSunk = ship.fields.every((field) => field.hit);
    ship.sunk = isSunk;
    if (isSunk) {
      ship.fields.forEach((field) => {
        COMPUTER_BOARD.querySelector(
          `[data-field-name=${field.name}`
        ).classList.add("sunk");
      });
    }
    fieldOnBoard.classList.add("hit");
    const lostAllShips = computerState.ships.every((ship) => ship.sunk);
    computerState.lostAllShips = lostAllShips;
    setDataInStorage("userPoints", +getDataFromStorage("userPoints") + 1);
    if (lostAllShips) {
      const { settlement, result, userPoints } = getResult();
      displayModal(settlement, result, +userPoints);
      stopTimer();
      saveMatchResult(result, +userPoints);
    }
  } else {
    fieldIndex = computerEmptyFields.findIndex(
      (field) => field.fieldName === fieldName
    );
    if (fieldIndex >= 0) {
      computerEmptyFields.splice(fieldIndex, 1);
      fieldOnBoard.classList.add("miss");
    }
    computerMove();
  }
}

export function makeFieldsTargetable() {
  let fields = document.querySelectorAll(
    ".board__fields--computer .board__field"
  );
  fields.forEach((field) => {
    field.addEventListener("click", hitField);
  });
}
