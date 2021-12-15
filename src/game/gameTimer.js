import { finishGame } from "./gameResult";

// container class where will be displayed timer. Change classname if it is necessary
const TIMER = document.querySelector(".timer");

let gameTime;

export function setTimer(time = 10) {
  let totalSeconds = time * 60;
  let minutes = totalSeconds / 60;
  let seconds = totalSeconds - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  TIMER.textContent = `${minutes}:${seconds}`;

  gameTime = setInterval(() => {
    totalSeconds -= 1;

    seconds = totalSeconds % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    minutes = Math.floor(totalSeconds / 60);

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    TIMER.textContent = `${minutes}:${seconds}`;

    if (totalSeconds === 0) {
      clearInterval(gameTime);
      finishGame();
    }
  }, 1000);
}

export function stopTimer() {
  clearInterval(gameTime);
}
