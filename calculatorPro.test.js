const calculatorPro = require("./calculatorPro.test");

describe("this code should work like a math bot on certain ocations as follows in tests", function () {
    test("when receives something that is not a number, it informs the user", () => {
        //AAA: Arrange - Act - Assert
        //Arrange
        const newNumber = 'hola';
        const expected = "Input not valid. Please make sure to introduce 1 number only.";
        //Act
        const result = calculatorPro();
        // Assert
        expect(result).toBe(expected);
    });
    test("when function receives only 1 number, it should return its square root", () => {
        //AAA: Arrange - Act - Assert
        //Arrange
        const n1 = 4;
        const expected = 2;
        //Act
        const result = calculatorPro();
        // Assert
        expect(result).toBe(expected);
    });
        test("when bot calculates a decimal number, it should not show more than 3 decimals", () => {
        //AAA: Arrange - Act - Assert
        //Arrange
        const n1 = 0.2354;
        const n2 = 0.1
        const expected = 0.3354;
        //Act
        const result = calculatorPro();
        // Assert
        expect(result).toBe(expected);
    });
}
