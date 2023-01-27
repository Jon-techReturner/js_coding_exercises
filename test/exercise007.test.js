import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
  } from "../challenges/exercise007";

  describe("sumDigits", () => {
    test("This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.", () => {
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(6810)).toBe(15);
      expect(sumDigits(55285)).toBe(25);
    });
  
  });

  describe("createRange", () => {
    test("This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.", () => {
      expect(createRange(3, 11, 2)).toBe([ 3, 5, 7, 9, 11 ]);
      expect(createRange(6, 20, 3)).toBe([ 6, 9, 12, 15, 18 ]);
    });

    test("if the step parameter not provided", () => {
      expect(createRange(5, 10)).toBe([ 5, 6, 7, 8, 9, 10 ]);
      expect(createRange(1, 5)).toBe([ 1, 2, 3, 4, 5 ]);
    });
  
  });