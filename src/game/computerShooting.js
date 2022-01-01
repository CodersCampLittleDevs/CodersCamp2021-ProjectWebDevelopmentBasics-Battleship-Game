import { playerState, playerShips, playerEmptyFields } from "./game";
import getResult from "./gameResult";
import displayModal from "./gameOverModal";
import stopTimer from "./gameTimer";

let probabilityArray = [
  false,
  false,
  true,
  false,
  true,
  true,
  false,
  false,
  false,
  false,
];

const PLAYER_BOARD = document.querySelector(".board__fields--player");
const COMPUTER_BOARD = document.querySelector(".board__fields--computer");
export function computerMove() {
  const timeForComputer = Math.random() * 1000 + 1000;

  const classes = ["disabled", "overlay"];
  COMPUTER_BOARD.classList.add(...classes);
  setTimeout(() => {
    const move = Math.floor(Math.random() * probabilityArray.length);
    const hit = probabilityArray[move];
    let fieldOnBoard;
    if (hit) {
      const fieldIndex = Math.floor(Math.random() * playerShips.length);
      const fieldToDestroy = playerShips[fieldIndex];
      const fieldName = fieldToDestroy.fieldName;
      fieldOnBoard = PLAYER_BOARD.querySelector(
        `[data-field-name=${fieldName}`
      );
      const shipName = fieldToDestroy.shipName;
      playerShips.splice(fieldIndex, 1);
      const ship = playerState.ships.find((ship) => ship.shipName === shipName);
      const field = ship.fields.findIndex((field) => field.name === fieldName);
      ship.fields[field].hit = true;
      const isSunk = ship.fields.every((field) => field.hit);
      ship.sunk = isSunk;
      fieldOnBoard.classList.add("hit");
      const lostAllShips = playerState.ships.every((ship) => ship.sunk);
      playerState.lostAllShips = lostAllShips;
      if (lostAllShips) {
        const { settlement, result, userPoints } = getResult();
        displayModal(settlement, result, +userPoints);
        stopTimer();
      }
      computerMove();
    } else {
      const fieldIndex = Math.floor(Math.random() * playerEmptyFields.length);
      const fieldName = playerEmptyFields[fieldIndex].fieldName;
      fieldOnBoard = PLAYER_BOARD.querySelector(
        `[data-field-name=${fieldName}`
      );
      fieldOnBoard.classList.add("miss");
      playerEmptyFields.splice(fieldIndex, 1);
    }
    COMPUTER_BOARD.classList.remove(...classes);
  }, timeForComputer);
}
