import {
  setDataInStorage,
  getDataFromStorage,
} from "../utils/localStorage/localStorage";

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
