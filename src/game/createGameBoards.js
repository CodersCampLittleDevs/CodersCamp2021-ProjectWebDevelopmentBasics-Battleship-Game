import { SHIPS_LIST } from "./constants";
import { getDataFromStorage } from "./../utils/localStorage/localStorage";

const GAME_BOARD_WIDTH = 10;
const GAME_BOARD = document.querySelectorAll(".board__fields");
const CHARACTER_CONTAINER = document.querySelectorAll(".board__characters");
const NUMBER_CONTAINER = document.querySelectorAll(".board__numbers");
const SHIPS_CONTAINER = document.querySelectorAll(".ships__row");
const PLAYER_NAME_FIELD = document.querySelector(".player");
const SHIPS_HEADING = document.querySelector(".ships__heading");
const BUTTON = document.querySelector(".actions__button");

export const createGameBoards = () => {
  GAME_BOARD.forEach((e) => {
    for (let i = 0; i < GAME_BOARD_WIDTH ** 2; i++) {
      let newField = document.createElement("div");
      newField.classList.add(`board__field`);
      newField.dataset.id = i;
      e.appendChild(newField);
      newField.style.width = `${100 / GAME_BOARD_WIDTH}%`;
      newField.style.height = `${100 / GAME_BOARD_WIDTH}%`;
    }
  });

  CHARACTER_CONTAINER.forEach((e) => {
    for (let i = 0; i < GAME_BOARD_WIDTH; i++) {
      let newChar = document.createElement("div");
      newChar.classList.add(`board__characters-char`);
      newChar.innerHTML = `<p>${String.fromCharCode(i + 65)}</p>`;
      e.appendChild(newChar);
      newChar.style.width = `40px`;
      newChar.style.height = `${100 / GAME_BOARD_WIDTH}%`;
    }
  });

  NUMBER_CONTAINER.forEach((e) => {
    for (let i = 0; i < GAME_BOARD_WIDTH; i++) {
      let newNumb = document.createElement("div");
      newNumb.classList.add(`board__numbers-numb`);
      newNumb.innerHTML = `<p>${i + 1}</p>`;
      e.appendChild(newNumb);
      newNumb.style.width = `${100 / GAME_BOARD_WIDTH}%`;
      newNumb.style.height = `40px`;
    }
  });

  SHIPS_CONTAINER.forEach((target) => {
    SHIPS_LIST.forEach((e, index) => {
      let newElement = document.createElement("div");
      newElement.classList.add(`ships-ship`);
      newElement.dataset.name = SHIPS_LIST[index].shipName;
      window.addEventListener("resize", () => {
        let windowWidth = window.innerWidth;
        if (windowWidth > 1399) {
          newElement.style.width = `${25 * e.size}px`;
        } else if (windowWidth > 1023) {
          newElement.style.width = `${15 * e.size}px`;
        } else {
          newElement.style.width = `${10 * e.size}px`;
        }
      });
      newElement.style.width = `${25 * e.size}px`;
      target.appendChild(newElement);
    });
  });

  getDataFromStorage(name)
    ? (PLAYER_NAME_FIELD.innerText = `${getDataFromStorage(name)}`)
    : (PLAYER_NAME_FIELD.innerText = "Player");
};

export const checkIfGameStarted = (isGameStarted, START_GAME_BTN) => {
  if (isGameStarted) {
    SHIPS_HEADING.innerText = "Yours ships:";
    BUTTON.style.display = "none";
    START_GAME_BTN.style.display = "none";
  } else {
    SHIPS_HEADING.innerText = "Deploy Your Ships:";
    BUTTON.style.display = "flex";
    START_GAME_BTN.style.display = "flex";
  }
};
