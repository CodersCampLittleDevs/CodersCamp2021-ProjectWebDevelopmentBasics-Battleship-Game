import {
  setDataInStorage,
  getDataFromStorage,
} from "../utils/localStorage/localStorage";

export const addPoint = (isPlayer) => {
  let score;
  getDataFromStorage(isPlayer ? "userPoints" : "computerPoints")
    ? (score = getDataFromStorage(isPlayer ? "userPoints" : "computerPoints"))
    : (score = 0);
  score++;
  setDataInStorage(isPlayer ? "userPoints" : "computerPoints", score);
};
