import { expect, test } from '@jest/globals';
import 'jest';
import * as comp from './complexOperations';
import * as bas from "./basicOperations";


describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    describe("No mock",() =>{
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
    describe("Mock",() =>{
      beforeEach(()=>{
        jest.restoreAllMocks();
      })
      test.only('Test a valid email', () => {
        jest.spyOn(bas,"isString").mockReturnValue(true);
        jest.spyOn(bas,"validateEmail").mockReturnValue(true);
        expect(comp.checkEmail(1)).toBe('The email is valid')
      });
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
    test('Enter a insted of a number', () => {
      expect(comp.calculateArea("square",3,"a")).toBe('number1 and number2 should be numbers')
    });
    test('Enter nothing', () => {
      expect(comp.calculateArea()).toBe('undefined is not supported')
    });
  });

  describe('sumGratherThan', () => {
    test('Enter 3, 2 and 4 , sum 5', () => {
      expect(comp.sumGratherThan(3,2,4)).toBe(`5 is grather than 4`)
    });
    test('Enter 3, 2 and 7 , sum 5', () => {
      expect(comp.sumGratherThan(3,2,7)).toBe(`5 is less than 7`)
    });
    test('Enter nothing', () => {
      expect(comp.sumGratherThan()).toBe('The params should be numbers')
    });
    test('Enter an array', () => {
      expect(comp.sumGratherThan([],2,3)).toBe('The params should be numbers')
    });
  });

  describe('intersectionBetweenArrays', () => {
    test('Array1 and Array2 have 1 element in common', () => {
      expect(comp.intersectionBetweenArrays([1,2,"a"],[1,"a"])).toEqual([1,"a"])
    });
    test('Array1 and Array2 do not have an element in common', () => {
      expect(comp.intersectionBetweenArrays([1,2],[5,"a"])).toEqual('There are not matching elements')
    });
    test('Array2 undefine', () => {
      expect(comp.intersectionBetweenArrays([1,2],)).toBe('The params should be arrays')
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    test('Sort 2 arrays by name', () => {
      expect(comp.sortArrayOfObjectsByKey([{name:"jesus"},{name:"ana"}],"name")).toEqual([{name:"ana"},{name:"jesus"}])
    });
    test('Sort 2 arrays by name', () => {
      expect(comp.sortArrayOfObjectsByKey([{name:"jesus"},{name:"xavi"}],"name")).toEqual([{name:"jesus"},{name:"xavi"}])
    });
    test('Sort 2 equals arrays by name', () => {
      expect(comp.sortArrayOfObjectsByKey([{name:"jesus"},{name:"jesus"}],"name")).toEqual([{name:"jesus"},{name:"jesus"}])
    });
    test('Array undefined', () => {
      expect(comp.sortArrayOfObjectsByKey(undefined,"name")).toEqual('The first param should be an array')
    });
    test('Sort 2 arrays by a number', () => {
      expect(comp.sortArrayOfObjectsByKey([{name:"jesus"},{name:"ana"}],1)).toEqual('The second param should be an string')
    });
    test('Sort 2 arrays by string = 12', () => {
      expect(comp.sortArrayOfObjectsByKey([{name:"jesus"},{name:"ana"}],"12")).toEqual(`Some elements in the array does not have the 12 property`)
    });
    test('Sort 3 arrays by name, but 1 does not have that property', () => {
      expect(comp.sortArrayOfObjectsByKey([{name:"jesus"},{name:"ana"},{car:"maria"}],"name")).toEqual(`Some elements in the array does not have the name property`)
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    test('Array of numbers', () => {
      expect(comp.numberOfOddAndEvenNumbers([0,1,2,3,4,5])).toEqual({odd:3,even:3})
    });
    test('Array of numbers whit decimals', () => {
      expect(comp.numberOfOddAndEvenNumbers([0,1.3,2.3])).toEqual({odd:2,even:1})
    });
    test('Undefined param', () => {
      expect(comp.numberOfOddAndEvenNumbers()).toEqual('The param should be an array')
    });
    test('Array of letters and numbers', () => {
      expect(comp.numberOfOddAndEvenNumbers(["a","b",1])).toEqual(`The array should have only numbers`)
    });
  });
});  