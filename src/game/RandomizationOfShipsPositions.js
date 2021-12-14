import { SHIPS_LIST } from "./SHIPS_LIST";

export const gameBoardArray = [];
let direction;
let Position;
const GAME_BOARD_WIDTH = 10;

const createGameBoardArray = () => {
  for (let i = 0; i < GAME_BOARD_WIDTH; i++) {
    gameBoardArray.push([]);
    for (let j = 0; j < GAME_BOARD_WIDTH; j++) {
      gameBoardArray[i].push(0);
    }
  }
};
createGameBoardArray();

const directionRoll = () => {
  Math.floor(Math.random() * 2) === 0
    ? (direction = "vertical")
    : (direction = "horizontal");
};

const makePosition = (k) => {
  Position = [];
  for (let i = 0; i < 2; i++) {
    Position.push(Math.floor(Math.random() * GAME_BOARD_WIDTH));
  }
  if (direction === "horizontal") {
    if (Number(`${Position[1]}`) + SHIPS_LIST[k].size > GAME_BOARD_WIDTH) {
      Position[1] = Math.abs(Number(`${Position[1]}`) - SHIPS_LIST[k].size);
    }
  } else {
    if (Number(`${Position[0]}`) + SHIPS_LIST[k].size > GAME_BOARD_WIDTH) {
      Position[0] = Math.abs(Number(`${Position[0]}`) - SHIPS_LIST[k].size);
    }
  }

  return { Position, direction };
};

const addShip = () => {
  for (let k = 0; k < SHIPS_LIST.length; k++) {
    directionRoll();
    if (direction === "horizontal") {
      horizontal(k);
    } else {
      vertical(k);
    }
  }
};

const vertical = (k) => {
  makePosition(k);
  let crashTestArr = [];
  for (let i = 0; i < SHIPS_LIST[k].size; i++) {
    crashTestArr.push(gameBoardArray[Position[0] + i][Position[1]]);
  }
  if (crashTestArr.includes(1)) {
    vertical(k);
  } else {
    for (let i = 0; i < SHIPS_LIST[k].size; i++) {
      gameBoardArray[Position[0] + i].fill(1, Position[1], Position[1] + 1);
    }
  }
};

const horizontal = (k) => {
  makePosition(k);
  let crashTestArr = gameBoardArray[Position[0]].slice(
    Position[1],
    Position[1] + SHIPS_LIST[k].size
  );
  if (crashTestArr.includes(1)) {
    horizontal(k);
  } else {
    gameBoardArray[Position[0]].fill(
      1,
      Position[1],
      Number(`${Position[1]}`) + SHIPS_LIST[k].size
    );
  }
};

addShip();
