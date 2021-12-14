import "./game.scss";
import { SHIPS_LIST } from "./SHIPS_LIST";

const GAME_BOARD_WIDTH = 10;
const gameBoard = document.querySelectorAll(".board__board-fieldsWrapper");
const charWrapper = document.querySelectorAll(".board__charactersWrapper");
const numbWrapper = document.querySelectorAll(".board__numbersWrapper");
const playerNameField = document.querySelector(".player");
const shipsList = document.querySelectorAll(".board__shipsWrapper-ships");

gameBoard.forEach((e) => {
  for (let i = 0; i < GAME_BOARD_WIDTH ** 2; i++) {
    let newField = document.createElement("div");
    newField.classList.add(`board__board-field`);
    newField.dataset.id = i;
    e.appendChild(newField);
    newField.style.width = `${100 / GAME_BOARD_WIDTH}%`;
    newField.style.height = `${100 / GAME_BOARD_WIDTH}%`;
  }
});

charWrapper.forEach((e) => {
  for (let i = 0; i < GAME_BOARD_WIDTH; i++) {
    let newChar = document.createElement("div");
    newChar.classList.add(`board__charactersWrapper-char`);
    newChar.innerHTML = `<h1>${String.fromCharCode(i + 65)}</h1>`;
    e.appendChild(newChar);
    newChar.style.width = `40px`;
    newChar.style.height = `${100 / GAME_BOARD_WIDTH}%`;
  }
});

numbWrapper.forEach((e) => {
  for (let i = 0; i < GAME_BOARD_WIDTH; i++) {
    let newNumb = document.createElement("div");
    newNumb.classList.add(`board__numbersWrapper-numb`);
    newNumb.innerHTML = `<h1>${i + 1}</h1>`;
    e.appendChild(newNumb);
    newNumb.style.width = `${100 / GAME_BOARD_WIDTH}%`;
    newNumb.style.height = `40px`;
  }
});

window.localStorage.getItem("name")
  ? (playerNameField.innerText = `${window.localStorage.getItem("name")}`)
  : (playerNameField.innerText = "Player");

shipsList.forEach((target) => {
  SHIPS_LIST.forEach((e) => {
    let newElement = document.createElement("div");
    newElement.classList.add(`board__shipsWrapper-ship`);
    newElement.style.width = `${25 * e.size}px`;
    target.appendChild(newElement);
  });
});
