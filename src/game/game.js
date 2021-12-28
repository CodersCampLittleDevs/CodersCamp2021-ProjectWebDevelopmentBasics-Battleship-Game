import { setTimer, stopTimer } from "./gameTimer";
import { getResult } from "./gameResult";
import { displayModal } from "./gameOverModal";
import { createGameBoards, checkIfGameStarted } from "./createGameBoards";
import { addShipsToBoard } from "./randomizationOfShipsPositions";
import { generateShipsArray } from "./shipsArray";
import { startGame, isGameStarted, START_GAME_BTN } from "./startGame";
import "../styles.scss";
import "./game.scss";
import "./gameOverModal.scss";
import { addShooting } from "./playerShooting";

const RANDOMIZE_BTN = document.querySelector(".actions__button-randomize");

createGameBoards();
checkIfGameStarted(isGameStarted, START_GAME_BTN);
START_GAME_BTN.addEventListener("click", startGame);

RANDOMIZE_BTN.addEventListener("click", function () {
  addShipsToBoard(true);
});

// only for test
addShipsToBoard(false);

//for test
export let computerState = {
  lostAllShips: false,
  ships: [
    {
      fields: [
        {
          name: "F2",
          hit: false,
        },
        {
          name: "G2",
          hit: false,
        },
        {
          name: "H2",
          hit: false,
        },
        {
          name: "I2",
          hit: false,
        },
        {
          name: "J2",
          hit: false,
        },
      ],
      shipName: "Carrier",
      sunk: false,
    },
  ],
};
//for test
export let computerShips = [
  {
    isEmpty: false,
    shipName: "Carrier",
    fieldName: "F2",
    hit: false,
  },
  {
    isEmpty: false,
    shipName: "Carrier",
    fieldName: "G2",
    hit: false,
  },
  {
    isEmpty: false,
    shipName: "Carrier",
    fieldName: "H2",
    hit: false,
  },
  {
    isEmpty: false,
    shipName: "Carrier",
    fieldName: "I2",
    hit: false,
  },
  {
    isEmpty: false,
    shipName: "Carrier",
    fieldName: "J2",
    hit: false,
  },
];
//for test
export let computerEmptyFields = [
  {
    isEmpty: true,
    fieldName: "A1",
  },
  {
    isEmpty: true,
    fieldName: "A2",
  },
  {
    isEmpty: true,
    fieldName: "A3",
  },
  {
    isEmpty: true,
    fieldName: "A4",
  },
  {
    isEmpty: true,
    fieldName: "A5",
  },
  {
    isEmpty: true,
    fieldName: "A6",
  },
  {
    isEmpty: true,
    fieldName: "A7",
  },
  {
    isEmpty: true,
    fieldName: "A8",
  },
  {
    isEmpty: true,
    fieldName: "A9",
  },
  {
    isEmpty: true,
    fieldName: "A10",
  },
];

addShooting();
