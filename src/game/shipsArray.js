import { SHIPS_LIST } from "./constants";
let PLAYER_SHIPS = generateShips();
let COMPUTER_SHIPS = generateShips();

export function generateShips() {
  let shipsObject = {};
  let shipsArray = [];
  for (const ship of SHIPS_LIST) {
    let fields = [];
    for (let i = 0; i < ship.size; i++) {
      fields.push({
        name: null,
        hit: false,
      });
    }
    shipsArray.push({
      name: ship.shipName,
      fields,
      sunk: false,
    });
  }
  shipsObject.ships = shipsArray;
  shipsObject.sunk = false;
  return shipsObject;
}
