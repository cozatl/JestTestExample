const { sumArray, countWords, findMax, isDivisible } = require('../js/main');

// it is used to test the function and deliver a expected value.
describe('testing functions', () => {
    it('should sum array numbers', () => {
        expect(sumArray([1,2])).toBe(3);
        expect(sumArray([-10,-20])).toBe(-30);
        expect(sumArray([])).toEqual(0);
        expect(sumArray([0,10,-20])).toBeLessThan(0);
    });

    it('should count words', () => {
        expect(countWords('This is the first test')).toBe(5);
        expect(countWords('   This is the second test   ')).toBeGreaterThanOrEqual(5);
        expect(countWords('')).toBe(0);
        expect(countWords('I    am executing some   tests with    javascript  and    jest')).toEqual(9);
    });

    it('should find max number', () => {
        expect(findMax([1, 2, 3, 4, 9])).toBe(9);
        expect(findMax([-10, -20, -30, -40, -50])).toEqual(-10);
        expect(findMax([])).toBe(null);
        expect(findMax([7, 7, 7, 7, 7])).toEqual(7);
    });

    it('should find if divisible values are integer', () => {
        expect(isDivisible(10,2)).toBeTruthy();
        expect(isDivisible(20, 3)).toBeFalsy();
        expect(isDivisible(30, 0)).toEqual('No se puede dividir entre cero');
        expect(isDivisible(-7, -7)).not.toBeFalsy();
    });
});