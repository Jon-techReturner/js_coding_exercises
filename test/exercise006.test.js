import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,    
  } from "../challenges/exercise006";
  
  describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([10, 7, 9])).toBe(19);
      expect(sumMultiples([18, 23, 11, 8, 31])).toBe(18);
    });
  
    test("if the number is not multiple of 3 or 5, returns 0", () => {
      expect(sumMultiples([4, 7, 17, 47])).toBe(0);
    });
  
  });

  describe("isValidDNA", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
      const dna = ["G", "C", "T", "A"];
      expect(isValidDNA(dna, "CTAG")).toBe(true);
      expect(isValidDNA(dna, "BTAG")).toBe(false);
    });
  
  });