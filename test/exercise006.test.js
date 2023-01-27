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
    test("return true/false depending on whether it is a valid DNA string", () => {
      expect(isValidDNA("CTAG")).toBe(true);
      expect(isValidDNA("TBAG")).toBe(false);
      expect(isValidDNA("TTCGACCAAAACTGCTG")).toBe(true);
      expect(isValidDNA("A")).toBe(true);
    });
  
  });

  describe("getComplementaryDNA", () => {
    test("return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G", () => {
      expect(getComplementaryDNA("ACTG")).toBe("TGAC");
      expect(getComplementaryDNA("AAGCTGGTTTTGACGAC")).toBe("TTCGACCAAAACTGCTG");
      expect(getComplementaryDNA("GGAACCGTACCTTAAGGAACT")).toBe("CCTTGGCATGGAATTCCTTGA");
      expect(getComplementaryDNA("agcaagagca")).toBe("TCGTTCTCGT");
    });
  
  });

  describe("isItPrime", () => {
    test("return true/false depending on whether it is a prime number or not", () => {
      expect(isItPrime(1)).toBe(false);
      expect(isItPrime(2)).toBe(true);
      expect(isItPrime(7)).toBe(true);
    });
  
  });
  describe("createMatrix", () => {
    test("should receive a number and return an array of n arrays, each filled with n items.", () => {
     
      expect(JSON.stringify(createMatrix(3,"foo"))).toBe(JSON.stringify([
        [ 'foo', 'foo', 'foo'],
        [ 'foo', 'foo', 'foo'],
        [ 'foo', 'foo', 'foo']
      ]));
      expect(JSON.stringify(createMatrix(6,"buzz"))).toBe(JSON.stringify([
        [ 'buzz', 'buzz', 'buzz', 'buzz', 'buzz', 'buzz' ],
        [ 'buzz', 'buzz', 'buzz', 'buzz', 'buzz', 'buzz' ],
        [ 'buzz', 'buzz', 'buzz', 'buzz', 'buzz', 'buzz' ],
        [ 'buzz', 'buzz', 'buzz', 'buzz', 'buzz', 'buzz' ],
        [ 'buzz', 'buzz', 'buzz', 'buzz', 'buzz', 'buzz' ],
        [ 'buzz', 'buzz', 'buzz', 'buzz', 'buzz', 'buzz' ]
      ]));
    });
  
  });
  describe("areWeCovered", () => {
    test("return true/false depending on whether there are enough staff scheduled for the given day. 3 staffs required per day", () => {
      const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Joe", rota: ["Monday", "Wednesday", "Friday"] },
        { name: "John", rota: ["Tuesday", "Thursday", "Friday", "Sunday"] },
        { name: "Terence", rota: ["Monday", "Wednesday", "Saturday", "Sunday"] },
        
      ];
      expect(areWeCovered(staff, "Monday")).toBe(true);
      expect(areWeCovered(staff, "Tuesday")).toBe(true);
      expect(areWeCovered(staff, "Wednesday")).toBe(true);
      expect(areWeCovered(staff, "Thursday")).toBe(false);
      expect(areWeCovered(staff, "Friday")).toBe(true);
      expect(areWeCovered(staff, "Saturday")).toBe(false);
      expect(areWeCovered(staff, "Sunday")).toBe(true);
    });
  
  });