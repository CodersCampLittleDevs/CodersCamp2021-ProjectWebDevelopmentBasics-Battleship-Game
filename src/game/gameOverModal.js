import "./gameOverModal.scss";

const MODAL = document.createElement("div");
MODAL.classList.add("modal");

export function displayModal(GAME_RESULT, GAME_WIN_OR_LOSE, POINTS) {
  MODAL.innerHTML = `<div class="modal__content">
                        <h2 class="modal__settlement">${GAME_RESULT}!</h2>
                        <h3 class="modal__result">You ${GAME_WIN_OR_LOSE} with ${POINTS} points</h3>
                        <div class="modal__actions">
                            <a href="#" class="modal__action-item modal__new-game-js">Start New Game</a>
                            <a href="/highscores.html" class="modal__action-item">High Scores</a>
                            <a href="/main.html" class="modal__action-item">Return</a>
                        </div>                        
                    </div>`;
  document.querySelector("body").prepend(MODAL);
  document
    .querySelector(".modal__new-game-js")
    .addEventListener("click", closeModal);
}

function closeModal(event) {
  event.preventDefault();
  MODAL.remove();
  //   TODO - add logic for new game
}
