let gameTime;

function setTimer(time = 10, finishGame) {
  if (time < 1 || time > 60 || typeof time !== "number") {
    const err = new Error("Invalid value for game time.");
    throw err;
  }
  const timer = document.querySelector(".timer__counter");
  let totalSeconds = time * 60;
  let minutes = totalSeconds / 60;
  let seconds = totalSeconds - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  timer.textContent = `${minutes}:${seconds}`;

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

    timer.textContent = `${minutes}:${seconds}`;

    if (totalSeconds === 0) {
      finishGame();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(gameTime);
}

exports.setTimer = setTimer;
exports.stopTimer = stopTimer;
