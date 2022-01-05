import { getDataFromStorage } from "../utils/localStorage/localStorage";

export function setGameboardPlayername() {
  const gameBoardPlayerName = document.querySelector(".board__player-name");
  const playerName = getDataFromStorage("playerName");
  gameBoardPlayerName.innerHTML = playerName;
}
