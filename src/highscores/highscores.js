import globalStyles from "../styles.scss";

import styles from "./highscores.scss";

import {
    setDataInStorage, 
    getDataFromStorage
} from '../utils/localStorage/localStorage';

const playerName = getDataFromStorage('playerName') || '[]';
const userPoints = getDataFromStorage('userPoints') || '[]';
const result = getDataFromStorage('result') || '[]';

const summary = {player: playerName, score: userPoints, status: result};

const highscores = [...JSON.parse(userPoints), summary]
  .sort((a, b) => b.score- a.score)
  .slice(0, 5);

  setDataInStorage('userPoints', JSON.stringify(highscores));

