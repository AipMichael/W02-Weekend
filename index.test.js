const { livingNeighbors, boardLoop } = require("./index.assignment.js");

describe("this function should return a new array according to the game of life rules", () => {
  test("when function receives an array with only number 0, it should return the same array", () => {
    // Arrange
    const array = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    /* const i = 1; // vertical axis
    const j = 0; // horizontal axis */
    const expected = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    // Act
    const result = boardLoop(array, 1);
    // Assert
    expect(result).toEqual(expected);
  });
});

describe("this function should return the number of neighbors with 1 each neighbor has", () => {
  test("when function receives an array with 3 number 1 in the perimeter of an item, it should return 3", () => {
    // Arrange
    const array = [
      [1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0],
    ];
    const i = 1; // vertical axis
    const j = 0; // horizontal axis
    const expected = 3;
    // Act
    const result = livingNeighbors(array, i, j);
    // Assert
    expect(result).toBe(expected);
  });
});

describe("this function should return a new array according to the game of life rules", () => {
  test("when function receives circle, it should return the same figure", () => {
    // Arrange --BOAT
    const array = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const i = 1; // vertical axis
    const j = 0; // horizontal axis
    const expected = [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    // Act
    const result = boardLoop(array, i, j);
    // Assert
    expect(result).toEqual(expected);
  });
});

describe("this function should get an array a return a new one according to the rules of game of life", () => {
  test("when function receives an array with 3 an vertical line, it should return an horizontal line", () => {
    // Arrange
    const array = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    const expected = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    // Act
    const result = boardLoop(array, 1);
    // Assert
    expect(result).toEqual(expected);
  });
});
