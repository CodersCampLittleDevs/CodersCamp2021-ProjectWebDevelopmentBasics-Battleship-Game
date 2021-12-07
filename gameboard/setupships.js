let ships = [
  {
    shipName: "Carrier",
    size: 5,
    amount: 1,
  },
  {
    shipName: "	Battleship",
    size: 4,
    amount: 1,
  },
  {
    shipName: "Destroyer",
    size: 3,
    amount: 2,
  },
  {
    shipName: "Submarine",
    size: 2,
    amount: 2,
  },
  {
    shipName: "Patrol Boat",
    size: 1,
    amount: 3,
  },
];

let gameBoardWidth = 10;
const gameBoard = document.querySelectorAll(".gameBoard__board-fieldsWrapper");
const charWrapper = document.querySelectorAll(".gameBoard__charactersWrapper");
const numbWrapper = document.querySelectorAll(".gameBoard__numbersWrapper");
const playerNameField = document.querySelector(".player");
const goToHomePage = document.querySelector(".homaPageButton");
const setupShips = document.querySelector(
  ".gameBoard__shipsWrapper-setupShips"
);

//creating gameBoard

gameBoard.forEach((e) => {
  for (i = 0; i < gameBoardWidth ** 2; i++) {
    newField = document.createElement("div");
    newField.classList.add(`gameBoard__board-field`);
    newField.dataset.id = i;
    e.appendChild(newField);
    newField.style.width = `${100 / gameBoardWidth}%`;
    newField.style.height = `${100 / gameBoardWidth}%`;
  }
});

charWrapper.forEach((e) => {
  for (i = 0; i < gameBoardWidth; i++) {
    newChar = document.createElement("div");
    newChar.classList.add(`gameBoard__charactersWrapper-char`);
    newChar.innerHTML = `<h1>${String.fromCharCode(i + 65)}</h1>`;
    e.appendChild(newChar);
    newChar.style.width = `40px`;
    newChar.style.height = `${100 / gameBoardWidth}%`;
  }
});

numbWrapper.forEach((e) => {
  for (i = 0; i < gameBoardWidth; i++) {
    newNumb = document.createElement("div");
    newNumb.classList.add(`gameBoard__numbersWrapper-numb`);
    newNumb.innerHTML = `<h1>${i + 1}</h1>`;
    e.appendChild(newNumb);
    newNumb.style.width = `${100 / gameBoardWidth}%`;
    newNumb.style.height = `40px`;
  }
});

//generate player name

// creating tabel with ships

let shipsToDisplay = [];
ships.forEach((e) => {
  for (let i = 0; i < e.amount; i++) {
    shipsToDisplay.push(e.size);
  }
});

shipsToDisplay.forEach((e) => {
  newElement = document.createElement("div");
  newElement.classList.add(`gameBoard__shipsWrapper-ship`);
  newElement.style.width = `${40 * e}px`;
  setupShips.appendChild(newElement);
});
