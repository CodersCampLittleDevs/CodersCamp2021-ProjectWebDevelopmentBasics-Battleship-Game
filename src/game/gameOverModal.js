const MODAL = document.createElement("div");
MODAL.classList.add("modal");

function displayModal(GAME_RESULT, GAME_WIN_OR_LOSE, POINTS) {
  MODAL.innerHTML = `<div class="modal__content">
                        <h2 class="modal__settlement">${GAME_RESULT}!</h2>
                        <h3 class="modal__result">You ${GAME_WIN_OR_LOSE} with ${POINTS} points</h3>
                        <div class="modal__actions">
                            <a class="modal__action-item modal__new-game-js" href="#">Start New Game</a>
                            <a class="modal__action-item" href="/highscores.html">High Scores</a>
                            <a class="modal__action-item" href="/main.html">Return</a>
                        </div>                        
                    </div>`;
  document.querySelector("body").prepend(MODAL);
  document
    .querySelector(".modal__new-game-js")
    .addEventListener("click", closeModal);
}

function closeModal() {
  MODAL.remove();
  //   TODO - add logic for new game
}
exports.closeModal = closeModal;
exports.displayModal = displayModal;
