import { getDataFromStorage } from "../utils/localStorage/localStorage";

export const displayHighScores = () => {
  const highScores = JSON.parse(getDataFromStorage("highScores"));
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    tr.classList.add("table__row");
    if (highScores) {
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
    } else {
      tr.innerHTML = `
      <td class="row__cell">${i + 1}</td>
      <td class="row__cell row__cell-name"></td>
      <td class="row__cell row__cell-score"></td>
      <td class="row__cell row__cell-status"></td>`;
    }
    document.querySelector(".table").appendChild(tr);
  }
};
