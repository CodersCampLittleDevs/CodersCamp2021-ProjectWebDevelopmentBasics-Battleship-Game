// import { computerState, computerShips, computerEmptyFields } from "./game";

function hitField() {
  event.target.removeEventListener("click", hitField);
  event.target.style.cursor = "not-allowed";
  const fieldName = event.target.dataset.fieldName;
  let fieldindex = computerShips.findIndex(
    (ship) => ship.fieldName === fieldName
  );
  if (fieldindex >= 0) {
    const shipName = computerShips[fieldindex].shipName;
    computerShips.splice(fieldindex, 1);
    let ship = computerState.ships.find((ship) => ship.shipName === shipName);
    let field = ship.fields.findIndex((field) => field.name === fieldName);
    ship.fields[field].hit = true;
    const isSunk = ship.fields.every((field) => field.hit === true);
    ship.sunk = isSunk;
    const lostAllShieps = computerState.ships.every(
      (ship) => ship.sunk === true
    );
    computerState.lostAllShips = lostAllShieps;
  } else {
    fieldindex = computerEmptyFields.findIndex(
      (field) => field.fieldName === fieldName
    );
    if (fieldindex >= 0) {
      computerEmptyFields.splice(fieldindex, 1);
    } else return;
  }
}

export function addShooting() {
  let fields = document.querySelectorAll(
    ".board__fields--computer .board__field"
  );
  fields.forEach((field) => {
    field.addEventListener("click", hitField);
  });
}
