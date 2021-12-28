import { SHIPS_LIST } from "./constants";

const GAME_BOARD = document.querySelectorAll(".board__fields");

let gameBoardArray = [];
let fieldsNamesArray = [];
const GAME_BOARD_WIDTH = 10;

const createFieldsName = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      fieldsNamesArray.push(`${String.fromCharCode(i + 65)}${j + 1}`);
    }
  }
};
createFieldsName();
const createGameBoardArray = () => {
  gameBoardArray = [];
  for (let i = 0; i < GAME_BOARD_WIDTH; i++) {
    gameBoardArray.push([]);
    for (let j = 0; j < GAME_BOARD_WIDTH; j++) {
      gameBoardArray[i].push({
        isEmpty: true,
        fieldName: fieldsNamesArray[i * 10 + j],
      });
    }
  }
};

const rollDirection = () => {
  return Math.floor(Math.random() * 2) === 0 ? "vertical" : "horizontal";
};

const createPosition = (shipIndex, direction) => {
  let position = [];
  for (let i = 0; i < 2; i++) {
    position.push(Math.floor(Math.random() * GAME_BOARD_WIDTH));
  }
  if (
    direction === "horizontal" &&
    position[1] + SHIPS_LIST[shipIndex].size > GAME_BOARD_WIDTH
  ) {
    position[1] = Math.abs(position[1] - SHIPS_LIST[shipIndex].size);
  } else if (position[0] + SHIPS_LIST[shipIndex].size > GAME_BOARD_WIDTH) {
    position[0] = Math.abs(position[0] - SHIPS_LIST[shipIndex].size);
  }
  return position;
};

const placeShipsOnBoard = () => {
  for (let shipIndex = 0; shipIndex < SHIPS_LIST.length; shipIndex++) {
    const direction = rollDirection();
    if (direction === "horizontal") {
      positionShipHorizontally(shipIndex, direction);
    } else {
      positionShipVertically(shipIndex, direction);
    }
  }
  return gameBoardArray;
};

const positionShipVertically = (shipIndex, direction) => {
  const position = createPosition(shipIndex, direction);
  let positionsForCheck = [];
  for (let i = 0; i < SHIPS_LIST[shipIndex].size; i++) {
    positionsForCheck.push(gameBoardArray[position[0] + i][position[1]]);
  }
  if (positionsForCheck.some((el) => el.isEmpty === false)) {
    positionShipVertically(shipIndex);
  } else {
    for (let i = 0; i < SHIPS_LIST[shipIndex].size; i++) {
      gameBoardArray[position[0] + i].fill(
        {
          isEmpty: false,
          shipName: SHIPS_LIST[shipIndex].shipName,
          fieldName: fieldsNamesArray[(position[0] + i) * 10 + position[1]],
          hit: false,
        },
        position[1],
        position[1] + 1
      );
    }
  }
};

const positionShipHorizontally = (shipIndex, direction) => {
  const position = createPosition(shipIndex, direction);
  if (
    gameBoardArray[position[0]]
      .slice(position[1], position[1] + SHIPS_LIST[shipIndex].size)
      .some((el) => {
        return typeof el === Object && el.isEmpty === false;
      })
  ) {
    positionShipHorizontally(shipIndex);
  } else {
    for (let i = 0; i < SHIPS_LIST[shipIndex].size; i++) {
      gameBoardArray[position[0]][position[1] + i] = {
        isEmpty: false,
        shipName: SHIPS_LIST[shipIndex].shipName,
        fieldName: fieldsNamesArray[position[0] * 10 + i],
        hit: false,
      };
    }
  }
};

export const addShipsToBoard = (isPlayer) => {
  createGameBoardArray();
  const gameBoard = placeShipsOnBoard();
  if (isPlayer) {
    GAME_BOARD[isPlayer ? 0 : 1].innerHTML = "";
    let gameBoardForMap = gameBoardArray.flat(Infinity);
    gameBoardForMap.map((_, i) => {
      let newField = document.createElement("div");
      newField.classList.add(`board__field`);
      if (gameBoardForMap[i].isEmpty === false) {
        newField.classList.add(`ship`);
      }
      if (gameBoardForMap[i].shipName != "") {
        newField.setAttribute(
          "data-ship-name-board",
          gameBoardForMap[i].shipName
        );
      }
      newField.setAttribute("data-field-name", fieldsNamesArray[i]);
      newField.dataset.id = i;
      GAME_BOARD[isPlayer ? 0 : 1].appendChild(newField);
    });
  }
  return separateShipsFromEmptyFields(gameBoard);
};

const separateShipsFromEmptyFields = (board) => {
  let emptyFields = board
    .flat(Infinity)
    .filter((field) => field.isEmpty === true);
  let ships = board.flat(Infinity).filter((field) => field.isEmpty !== true);
  return [emptyFields, ships];
};
