import { finishGame } from "./gameResult";

const TIMER = document.querySelector(".timer"); // klasa kontenera w którym znajduje się zegar | do zmiany jeśli będziemy mieli widok

let gameTime;

export function setTime(time = 10) {
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

export function stopTime() {
  clearInterval(gameTime);
}
