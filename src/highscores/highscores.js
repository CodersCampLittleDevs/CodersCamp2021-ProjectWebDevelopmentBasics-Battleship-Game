import globalStyles from "../styles.scss";
import styles from "./highscores.scss";
import {
  setDataInStorage, 
  getDataFromStorage
} from '../utils/localStorage/localStorage';
import { displayModal } from "../game/gameOverModal";

export const saveMatchResult = (matchResult, points) => {
  const playerName = getDataFromStorage('playerName') ?? 'Player';
  const row = {name: playerName, score: points, status: matchResult};
  const highScore = getDataFromStorage('highScore');
    if (highScore) {
      const highScores = [...JSON.parse(highScore), row].sort((a, b) => b.score - a.score).slice(0, 10);
      setDataInStorage('highScore', JSON.stringify(highScores));
    } else {
      const newHighScores = [row];
      setDataInStorage('highScore', JSON.stringify(newHighScores));
    }
}

const displayHighScore = () => {
  const highScores = JSON.parse(getDataFromStorage('highScore'));
  const names = [...document.querySelectorAll('.table__data-name')];
  const scores = [...document.querySelectorAll('.table__data-score')];
  const statuses = [...document.querySelectorAll('.table__data-status')];

  names.forEach((name, index) => {
  console.log( highScores)
  name.innerHTML = highScores[index].name
  });

  scores.forEach((score, index) => {
  console.log( highScores)
   score.innerHTML = highScores[index].score
  });

  statuses.forEach((stat, index) => {
  console.log( highScores)
   stat.innerHTML = highScores[index].status
  });
}

displayHighScore();









  
 

