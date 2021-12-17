import { SHIPS_LIST } from "./constants";
import { getDataFromStorage } from "./../utils/localStorage/localStorage";

const GAME_BOARD_WIDTH = 10;
const gameBoard = document.querySelectorAll(".board__fields");
const charWrapper = document.querySelectorAll(".board__characters");
const numbWrapper = document.querySelectorAll(".board__numbers");
const shipsList = document.querySelectorAll(".ships__row");
const playerNameField = document.querySelector(".player");
const shipsHeading = document.querySelector(".ships__heading");
const buttons = document.querySelectorAll(".actions__button");

export const createGameBoards = () => {
  gameBoard.forEach((e) => {
    for (let i = 0; i < GAME_BOARD_WIDTH ** 2; i++) {
      let newField = document.createElement("div");
      newField.classList.add(`board__field`);
      newField.dataset.id = i;
      e.appendChild(newField);
      newField.style.width = `${100 / GAME_BOARD_WIDTH}%`;
      newField.style.height = `${100 / GAME_BOARD_WIDTH}%`;
    }
  });

  charWrapper.forEach((e) => {
    for (let i = 0; i < GAME_BOARD_WIDTH; i++) {
      let newChar = document.createElement("div");
      newChar.classList.add(`board__characters-char`);
      newChar.innerHTML = `<p>${String.fromCharCode(i + 65)}</p>`;
      e.appendChild(newChar);
      newChar.style.width = `40px`;
      newChar.style.height = `${100 / GAME_BOARD_WIDTH}%`;
    }
  });

  numbWrapper.forEach((e) => {
    for (let i = 0; i < GAME_BOARD_WIDTH; i++) {
      let newNumb = document.createElement("div");
      newNumb.classList.add(`board__numbers-numb`);
      newNumb.innerHTML = `<p>${i + 1}</p>`;
      e.appendChild(newNumb);
      newNumb.style.width = `${100 / GAME_BOARD_WIDTH}%`;
      newNumb.style.height = `40px`;
    }
  });

  shipsList.forEach((target) => {
    SHIPS_LIST.forEach((e) => {
      let newElement = document.createElement("div");
      newElement.classList.add(`ships-ship`);
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
    ? (playerNameField.innerText = `${getDataFromStorage(name)}`)
    : (playerNameField.innerText = "Player");
};

export const checkIsGameStarter = (isGameStarted, START_GAME_BTN) => {
  if (isGameStarted) {
    shipsHeading.innerText = "Yours ships:";
    buttons.forEach((element) => {
      element.style.display = "none";
    });
    START_GAME_BTN.style.display = "none";
  } else {
    shipsHeading.innerText = "Deploy Your Ships:";
    buttons.forEach((element) => {
      element.style.display = "flex";
    });
    START_GAME_BTN.style.display = "flex";
  }
};
