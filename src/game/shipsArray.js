import { SHIPS_LIST } from "./constants";
export const generateShipsArray = (board) => {
  let gameBoard = board.flat(Infinity);
  const ships = {
    ships: SHIPS_LIST.map((ship) => {
      return {
        shipName: ship.shipName,
        sunk: false,
        fields: generateShipFields(ship, gameBoard),
      };
    }),
    lostAllShips: false,
  };
  return ships;
};

const generateShipFields = (ship, gameboard) => {
  const fields = [];
  const shipFields = gameboard.filter(
    (field) => field.shipName === ship.shipName
  );
  for (let i = 0; i < shipFields.length; i++) {
    fields.push({
      name: shipFields[i].fieldName,
      hit: false,
    });
  }
  return fields;
};
