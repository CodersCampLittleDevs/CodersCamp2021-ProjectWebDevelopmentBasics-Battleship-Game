import { SHIPS_LIST } from "./constants";

const GAME_BOARD = document.querySelectorAll(".board__fields");

let gameBoardArray = [];
let fieldsNamesArr = [];
let direction;
let position;
const GAME_BOARD_WIDTH = 10;

const createFieldsName = () => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      fieldsNamesArr.push(`${String.fromCharCode(i + 65)}${j + 1}`);
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
        shipName: "",
      });
    }
  }
};

const directionRoll = () => {
  Math.floor(Math.random() * 2) === 0
    ? (direction = "vertical")
    : (direction = "horizontal");
};

const makePosition = (shipIndex) => {
  position = [];
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
};

const addShip = () => {
  createGameBoardArray();
  for (let shipIndex = 0; shipIndex < SHIPS_LIST.length; shipIndex++) {
    directionRoll();
    if (direction === "horizontal") {
      horizontalShipPosition(shipIndex);
    } else {
      verticalShipPosition(shipIndex);
    }
  }
};

const verticalShipPosition = (shipIndex) => {
  makePosition(shipIndex);
  let positionsForCheck = [];
  for (let i = 0; i < SHIPS_LIST[shipIndex].size; i++) {
    positionsForCheck.push(gameBoardArray[position[0] + i][position[1]]);
  }
  if (positionsForCheck.some((el) => el.isEmpty === false)) {
    verticalShipPosition(shipIndex);
  } else {
    for (let i = 0; i < SHIPS_LIST[shipIndex].size; i++) {
      gameBoardArray[position[0] + i].fill(
        {
          isEmpty: false,
          shipName: SHIPS_LIST[shipIndex].shipName,
        },
        position[1],
        position[1] + 1
      );
    }
  }
};

const horizontalShipPosition = (shipIndex) => {
  makePosition(shipIndex);
  if (
    gameBoardArray[position[0]]
      .slice(position[1], position[1] + SHIPS_LIST[shipIndex].size)
      .some((el) => el.isEmpty === false)
  ) {
    horizontalShipPosition(shipIndex);
  } else {
    gameBoardArray[position[0]].fill(
      {
        isEmpty: false,
        shipName: SHIPS_LIST[shipIndex].shipName,
      },
      position[1],
      position[1] + SHIPS_LIST[shipIndex].size
    );
  }
};

export const addShipsToBoard = () => {
  addShip();
  GAME_BOARD[0].innerHTML = "";
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
    newField.setAttribute("data-field-name", fieldsNamesArr[i]);
    newField.dataset.id = i;
    GAME_BOARD[0].appendChild(newField);
  });
};

/// only for test, show computer ships

export const addShipsToBoardComputer = () => {
  addShip();
  GAME_BOARD[1].innerHTML = "";
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
    newField.setAttribute("data-field-name", fieldsNamesArr[i]);
    newField.dataset.id = i;
    GAME_BOARD[1].appendChild(newField);
  });
};
