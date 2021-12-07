
let sizeX = 10;
let sizeY = 10;
const boardCreate = Array(sizeX).fill(0).map(x => Array(sizeY).fill(0));


let arrayOfShips5 = [[5,1],
                    [4,1],
                    [3,1],
                    [2,2],
                    [1,2]];



                    
function randomBoard(board, arrayOfShips) {

  arrayOfShips.forEach(i => {
    for(let j = 0; j < i[1]; j++){
      goodShip(board,i[0]);
    }
  })
 
  return board;
}


function goodShip(board,numOfMast) {
  let i = 0;
  let ship = [];
  let boardCh = [];


  while (i <= numOfMast) {
    boardCh = board;
    ship = createShip(numOfMast);
    ship.forEach(j => {
          if (boardCh[ j[0] ][ j[1] ] === 0) { 
            ++i;
          }
        })
  } 


  ship.forEach(j => {
    allPlaceRoundShip(j,boardCh)
  })

  ship.forEach(i => {
    boardCh[i[0]][i[1]] = 1;
  })

  return boardCh
}


function allPlaceRoundShip(i, board) {

  try {
    if (board[i[0] - 1][i[1] - 1] !== undefined) {

      board[i[0] - 1][i[1]] = 2;
      board[i[0] - 1][i[1] - 1] = 2;
      board[i[0]][i[1] - 1] = 2;

    }
  } catch {

  }

  try {
    if (board[i[0] + 1][i[1] - 1] !== undefined) {
      board[i[0]][i[1] - 1] = 2;
      board[i[0] + 1][i[1] - 1] = 2;
      board[i[0] + 1][i[1]] = 2;
    }
  } catch {

  }


  try {
    if (board[i[0] + 1][i[1] + 1] !== undefined) {
      board[i[0] + 1][i[1]] = 2;
      board[i[0] + 1][i[1] + 1] = 2;
      board[i[0]][i[1] + 1] = 2;
    }
  } catch {

  }


  try {
    if (board[i[0] - 1][i[1] + 1] !== undefined) {
      board[i[0] - 1][i[1]] = 2;
      board[i[0] - 1][i[1] + 1] = 2;
      board[i[0]][i[1] + 1] = 2;
    }
  } catch {

  }

  return board;
}


// position 1 is horizontal, 0 is vertical
function createShipStartPos(sizeShip) {
  let startDirection = Math.round(Math.random());
  let positionOffset = []
  if (startDirection === 1) {
    positionOffset = randomPos(sizeX - sizeShip, sizeY);
  } else {
    positionOffset = randomPos(sizeX, sizeY - sizeShip);
  }
  positionOffset.push(startDirection);
  return positionOffset
}

function randomPos(offsetX, offsetY) {
  let startPosX = Math.floor(Math.random() * offsetX);
  let startPosY = Math.floor(Math.random() * offsetY);
  return [startPosX, startPosY];
}

//method which create possition of all part ship
function createShip(sizeShip) {
  let position = createShipStartPos(sizeShip);
  let ship = [];
  for (let i = 0; i < sizeShip; i++) {
    if (position[2] === 1) {
      ship.push([position[0] + i, position[1]]);
    } else {
      ship.push([position[0], position[1] + i]);
    }
  }
  return ship;
}




let showBoard = randomBoard(boardCreate, arrayOfShips5);

showBoard.forEach((i) => {
  i.forEach(j => {
    document.body.innerHTML += j + ", ";
  })
  document.body.innerHTML += "<br>";
})
