/* const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
]; */

const board = [
  [1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [11, 12, 13, 14, 15],
];

const prueba = [];

function center(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      prueba.push(board[i][j]);
    }
  }
  console.log(prueba);
}

center(board);

const neighboorCoordenates = {
  1: [board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]],
  2: [board[i][j - 1], board[i + 1][j - 1], board[i + 1][j]],
  3: [board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]],
  4: [board[i][j + 1], board[i - 1][j + 1], board[i - 1][j]],
  5: [
    board[i - 1][j],
    board[i - 1][j + 1],
    board[i][j + 1],
    board[i + 1][j],
    board[i + 1][j + 1],
  ],
  6: [
    board[i][j - 1],
    board[i][j + 1],
    board[i][j + 1],
    board[i + 1][j - 1],
    board[i + 1][j],
    board[i + 1][j + 1],
  ],
  7: [
    board[i - 1][j],
    board[i - 1][j11],
    board[i][j - 1],
    board[i + 1][j - 1],
    board[i + 1][j],
  ],
  8: [
    board[i][j - 1],
    board[i - 1][j - 1],
    board[i - 1][j],
    board[i - 1][j + 1],
    board[i + 1][j + 1],
  ],
  9: [
    board[i - 1][j - 1],
    board[i - 1][j],
    board[i - 1][j + 1],
    board[i][j - 1],
    board[i][j],
    board[i][j + 1],
    board[i + 1][j - 1],
    board[i + 1][j],
    board[i + 1][j + 1],
  ],
};
