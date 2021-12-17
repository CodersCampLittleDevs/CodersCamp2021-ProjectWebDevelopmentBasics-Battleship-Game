// container class where will be displayed timer. Change classname if it is necessary
let gameTime;

function setTimer(time = 10, cb) {
  const TIMER = document.querySelector(".timer");
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
      cb();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(gameTime);
}

exports.setTimer = setTimer;
exports.stopTimer = stopTimer;
