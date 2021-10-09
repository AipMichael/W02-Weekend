const { livingNeighbors } = require("./index.assignment.js");

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
