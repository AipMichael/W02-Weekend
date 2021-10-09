// crear array de 5x5

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

console.table(board);

const isOne = (item) => {
  item === 1;
};
const isZero = (item) => {
  item === 0;
};
let newBoard;

let i = 0;
let j = 0;

// a terminar. queremos que nos devuelva un número: el número de vecinos vivos.



const liveNeighbors = (theBoard, i, j) => {
  const neighbors = 0;
  const width = board[i].length-1;
  const height = board.length-1; 

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
  } else if (i === height && j === width){ 
    //case 3 (corner right down)
    if (board[i - 1][j - 1]) neighbors++, 
    if (board[i - 1][j]) neighbors++, 
    if (board[i][j - 1]) neighbors++,
  } else if (i === height, j === 0){ 
    // case 4 (corner left bottom)
    if (board[i][j + 1]) neighbors++, 
    if (board[i - 1][j + 1]) neighbors++, 
    if (board[i - 1][j]) neighbors++,
  } else if (i > 0 && i < height && j === 0){
    // case 5 (left line) 
    if (board[i - 1][j]) neighbors++,
    if (board[i - 1][j + 1]) neighbors++,
    if (board[i][j + 1]) neighbors++,
    if (board[i + 1][j]) neighbors++,
    if (board[i + 1][j + 1]) neighbors++,
  } else if (i === 0 && (j > 0 && j < width)){ 
    // case 6 (top line)
    if (board[i][j - 1]) neighbors++,
    if (board[i][j + 1]) neighbors++,
    if (board[i + 1][j - 1]) neighbors++,
    if (board[i + 1][j]) neighbors++,
    if (board[i + 1][j + 1]) neighbors++
  } else if (i > 0 && i < height && j === width){ 
    // case 7 (right line)
    if (board[i - 1][j]) neighbors++,
    if (board[i - 1][j-1]) neighbors++,
    if (board[i][j - 1]) neighbors++,
    if (board[i + 1][j - 1]) neighbors++,
    if (board[i + 1][j]) neighbors++,
  } else if (i === height && (j > 0 && j < width)){ 
    // case 8 (bottom line)
    if (board[i][j - 1]) neighbors++,
    if (board[i - 1][j - 1]) neighbors++,
    if (board[i - 1][j]) neighbors++,
    if (board[i - 1][j + 1]) neighbors++,
    if (board[i + 1][j + 1]) neighbors++,
  } else {
    if (board[i - 1][j - 1]) neighbors++,
    if (board[i - 1][j]) neighbors++,
    if (board[i - 1][j + 1]) neighbors++,
    if (board[i][j - 1]) neighbors++,
    if (board[i][j + 1]) neighbors++,
    if (board[i + 1][j - 1]) neighbors++,
    if (board[i + 1][j]) neighbors++,
    if (board[i + 1][j + 1]) neighbors++,

  }
  return neighbors;
};

const boardLoop = (currentBoard) => {
  newBoard = currentBoard.slice();

  for (i; i < newBoard.length; i++) {
    for (j; j < newBoard[i].length; j++) {
      const neighbors = liveNeighbors(currentBoard, i, j);

      if (isOne(currentBoard[i][j]) && neighbors >= 2 && neighbors < 4) {
        newBoard[i][j] = 1;
      }
      if (isOne(currentBoard[i][j]) && neighbors < 2 && neighbors > 4) {
        newBoard[i][j] = 0;
        return;
      }
      if (isZero(currentBoard[i][j], i, j) && neighbors === 3) {
        newBoard[i][j] = 1;
      }
    }
  }
  return newBoard;
};

newBoard = boardLoop(board);

console.log(newBoard);
