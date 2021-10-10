let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

console.table(board);

const gameBoard = document.querySelector(".container");
console.log(gameBoard);

// creating the div board
const paintBoard = () => {
  const auxiliarNumber = 10;
  const subContainer = document.createElement("div");
  subContainer.className = "gameBoard__subBoard";
  gameBoard.appendChild(subContainer);

  for (let i = 0; i < auxiliarNumber; i += 1) {
    const row = document.createElement("div");
    subContainer.appendChild(row);
    row.classList.add("gameBoard__row", `${i}`);

    for (let j = 0; j < auxiliarNumber; j += 1) {
      const cell = document.createElement("div");
      row.appendChild(cell);
      cell.classList.add("gameBoard__cell", `${i}-${j}`);
      cell.style.backgroundColor = "white";
      cell.onclick = bringAutomation;
    }
  }
};

// function to give automation power to cells
function bringAutomation() {
  const index = this.id.split("-");
  const row = index[0];
  const file = index[1];

  if (this.style.backgroundColor === "white") {
    this.style.backgroundColor = "transparent";
    boad[row][file] = 1;
  } else {
    this.style.backgroundColor = "white";
    board[row][file] = 0;
  }
}

paintBoard();

// count number of neightbors alive
const livingNeighbors = (board, i, j) => {
  let neighbors = 0;
  const width = board[i].length - 1;
  const height = board.length - 1;

  if (i === 0 && j === 0) {
    // case 1 (corner left top)
    if (board[i][j + 1] === 1) neighbors++;
    if (board[i + 1][j] === 1) neighbors++;
    if (board[i + 1][j + 1] === 1) neighbors++;
  } else if (i === 0 && j === width) {
    // case 2 (corner right top)
    if (board[i][j - 1] === 1) neighbors++;
    if (board[i + 1][j - 1] === 1) neighbors++;
    if (board[i + 1][j] === 1) neighbors++;
  } else if (i === height && j === width) {
    // case 3 (corner right down)
    if (board[i - 1][j - 1] === 1) neighbors++;
    if (board[i - 1][j] === 1) neighbors++;
    if (board[i][j - 1] === 1) neighbors++;
  } else if ((i === height, j === 0)) {
    // case 4 (corner left bottom)
    if (board[i][j + 1] === 1) neighbors++;
    if (board[i - 1][j + 1] === 1) neighbors++;
    if (board[i - 1][j] === 1) neighbors++;
  } else if (i > 0 && i < height && j === 0) {
    // case 5 (left line)
    if (board[i - 1][j] === 1) neighbors++;
    if (board[i - 1][j + 1] === 1) neighbors++;
    if (board[i][j + 1] === 1) neighbors++;
    if (board[i + 1][j] === 1) neighbors++;
    if (board[i + 1][j + 1] === 1) neighbors++; // option 1
  } else if (i === 0 && j > 0 && j < width) {
    // case 6 (top line)
    if (board[i][j - 1] === 1) neighbors++;
    if (board[i][j + 1] === 1) neighbors++;
    if (board[i + 1][j - 1] === 1) neighbors++;
    if (board[i + 1][j] === 1) neighbors++;
    if (board[i + 1][j + 1] === 1) neighbors++; // option 2
  } else if (i > 0 && i < height && j === width) {
    // case 7 (right line)
    if (board[i - 1][j] === 1) neighbors++;
    if (board[i - 1][j - 1] === 1) neighbors++;
    if (board[i][j - 1] === 1) neighbors++;
    if (board[i + 1][j - 1] === 1) neighbors++;
    if (board[i + 1][j] === 1) neighbors++;
  } else if (i === height && j > 0 && j < width) {
    // case 8 (bottom line)
    if (board[i][j - 1] === 1) neighbors++;
    if (board[i - 1][j - 1] === 1) neighbors++;
    if (board[i - 1][j] === 1) neighbors++;
    if (board[i - 1][j + 1] === 1) neighbors++;
    if (board[i][j + 1] === 1) neighbors++;
  } else {
    if (board[i - 1][j - 1] === 1) neighbors++;
    if (board[i - 1][j] === 1) neighbors++;
    if (board[i - 1][j + 1] === 1) neighbors++;
    if (board[i][j - 1] === 1) neighbors++;
    if (board[i][j + 1] === 1) neighbors++;
    if (board[i + 1][j - 1] === 1) neighbors++;
    if (board[i + 1][j] === 1) neighbors++;
    if (board[i + 1][j + 1] === 1) neighbors++;
  }
  return neighbors;
};

// change the matrix - main function
const boardLoop = (currentBoard, count) => {
  if (count === 0) return;
  const newBoard = [];
  for (let i = 0; i < currentBoard.length; i++) {
    newBoard.push([]);
    for (let j = 0; j < currentBoard[i].length; j++) {
      const numberNeighbors = livingNeighbors(currentBoard, i, j);

      if (currentBoard[i][j] === 1) {
        if (numberNeighbors < 2 || numberNeighbors >= 4) {
          newBoard[i][j] = 0;
        } else if (numberNeighbors >= 2 && numberNeighbors < 4) {
          newBoard[i][j] = 1;
        }
      } else if (currentBoard[i][j] === 0) {
        if (numberNeighbors === 3) {
          newBoard[i][j] = 1;
        } else {
          newBoard[i][j] = 0;
        }
      }
    }
  }
  board = newBoard;
  return board;
  // console.log(board);
  // boardLoop(board, count - 1);
};

/* setInterval(() => {
 
  console.log(boardLoop(board));
}, 1000); */

boardLoop(board, 5);
module.exports = { livingNeighbors, boardLoop };
