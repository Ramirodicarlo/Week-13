import 'jest';
import * as complexOperations from './complexOperations';

var comp = complexOperations;

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    test('Test a valid email', () => {
      expect(comp.checkEmail("cas@gmail.com")).toBe('The email is valid')
    });
    test('Test undefine param', () => {
      expect(comp.checkEmail()).toBe('The email should be an string')
    });
    test('Test a string whitout @', () => {
      expect(comp.checkEmail("casa")).toBe('The email is invalid')
    });
    test('Test a string whitout .com', () => {
      expect(comp.checkEmail("casa@gmail")).toBe('The email is invalid')
    });
    test('Test a string whit @.com', () => {
      expect(comp.checkEmail("casa@.com")).toBe('The email is invalid')
    });
  });

  describe('calculateArea', () => {
    test('Area of a square with a side size of 4 ', () => {
      expect(comp.calculateArea("SQUARE",4,4)).toBe(16)
    });
    test('Area of a rectangle with a side size of 4 and 6 ', () => {
      expect(comp.calculateArea("rectangle",4,6)).toBe(24)
    });
    test('Area of a circle with a radium of 4', () => {
      expect(comp.calculateArea("circle",4)).toBeCloseTo(50.265)
    });
    test('Area of a triangle with a side size of 3 and 3', () => {
      expect(comp.calculateArea("triangle",3,3)).toBe(4.5)
    });
    test('Enter house insted of a figure', () => {
      expect(comp.calculateArea("house",3,3)).toBe("house is not supported")
    });
    test('Enter a insted of a number', () => {
      expect(comp.calculateArea("square","a",3)).toBe('number1 and number2 should be numbers')
    });
    test('Area of a triangle with a side size of -3 and 3, it must fail', () => {
      expect(comp.calculateArea("triangle",-3,3)).toBe(-4.5)
    });

  });

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {

    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      
    });
  });
});