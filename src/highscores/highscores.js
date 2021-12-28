import "../styles.scss";
import "./highscores.scss";
import {
  setDataInStorage,
  getDataFromStorage,
} from "../utils/localStorage/localStorage";
import { displayModal } from "../game/gameOverModal";

export const saveMatchResult = (matchResult, points) => {
  const PLAYER_NAME = getDataFromStorage("playerName") ?? "Player";
  const row = {
    name: PLAYER_NAME,
    score: points ?? "",
    status: matchResult ?? "",
  };
  const highScores = getDataFromStorage("highScores");
  if (highScores) {
    const result = [...JSON.parse(highScores), row]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    setDataInStorage("highScores", JSON.stringify(result));
  } else {
    const newHighScores = [row];
    setDataInStorage("highScores", JSON.stringify(newHighScores));
  }
};

const displayHighScores = () => {
  const highScores = JSON.parse(getDataFromStorage("highScores"));
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("table__row");
    tr.innerHTML = `
    <td class="row__cell">${i + 1}</td>
    <td class="row__cell row__cell-name">${
      highScores[i] ? highScores[i].name : ""
    }</td>
    <td class="row__cell row__cell-score">${
      highScores[i] ? highScores[i].score : ""
    }</td>
    <td class="row__cell row__cell-status">${
      highScores[i] ? highScores[i].status : ""
    }</td>`;
    document.querySelector(".table").appendChild(tr);
  }
};

displayHighScores();
