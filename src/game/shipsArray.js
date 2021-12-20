import { SHIPS_LIST } from "./constants";
export const generateShipsArray = () => {
  const ships = {
    ships: SHIPS_LIST.map((ship) => {
      return {
        shipName: ship.shipName,
        sunk: false,
        fields: generateShipFields(ship.size),
      };
    }),
    lostAllShips: false,
  };
  return ships;
};

const generateShipFields = (size) => {
  const fields = [];
  Array(size)
    .fill(0)
    .forEach((_) => {
      fields.push({
        name: null,
        hit: false,
      });
    });
  return fields;
};
