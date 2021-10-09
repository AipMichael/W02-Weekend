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

const liveNeighbors = (boardA, a, b) => {
    debugger;
    const neighbors = [];
    debugger;
    neighbors.push(
        boardA[a - 1][b - 1],
        boardA[a - 1][b],
        boardA[a - 1][b + 1],
        boardA[a][b - 1],
        boardA[a][b + 1],
        boardA[a + 1][b - 1],
        boardA[a + 1][b],
        boardA[a + 1]
    );

    return neighbors.reduce(
        (accumulator, neighbor) => accumulator + neighbor,
        0
    );
};

const boardLoop = (currentBoard) => {
    debugger;
    newBoard = currentBoard.slice();

    debugger;
    for (i; i < newBoard.length; i++) {
        for (j; j < newBoard[i].length; j++) {
            const neighbors = liveNeighbors(currentBoard, i, j);
            debugger;
            if (isOne(currentBoard[i][j]) && neighbors >= 2 && neighbors < 4) {
                debugger;
                return;
            }
            if (isOne(currentBoard[i][j]) && neighbors < 2 && neighbors > 4) {
                debugger;
                newBoard[i][j] = 0;
                return;
            }
            if (isZero(currentBoard[i][j], i, j) && neighbors === 3) {
                debugger;
                newBoard[i][j] = 1;
            }
        }
    }
    return newBoard;
};

newBoard = boardLoop(board);

console.log(newBoard);
