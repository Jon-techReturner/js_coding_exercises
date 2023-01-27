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
      expect(JSON.stringify(createRange(3, 11, 2))).toBe(JSON.stringify([ 3, 5, 7, 9, 11 ]));
      expect(JSON.stringify(createRange(6, 20, 3))).toBe(JSON.stringify([ 6, 9, 12, 15, 18 ]));
    });

    test("if the step parameter not provided", () => {
      expect(JSON.stringify(createRange(5, 10))).toBe(JSON.stringify([ 5, 6, 7, 8, 9, 10 ]));
      expect(JSON.stringify(createRange(1, 5))).toBe(JSON.stringify([ 1, 2, 3, 4, 5 ]));
    });
  
  });

  describe("getScreentimeAlertList", () => {
    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date from various applications", () => {
      const users = [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                         { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                         { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                         { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                         { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                        ]
           },
           {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                         { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                         { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                         { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
           },
         ];
      expect(getScreentimeAlertList(users, "2019-05-04" )).toBe(["beth_1234"]);
    });
  
  });

  describe("hexToRGB", () => {
    test("convert the colours.", () => {
      // expect(hexToRGB(123)).toBe(6);
      // expect(hexToRGB(6810)).toBe(15);
      // expect(hexToRGB(55285)).toBe(25);
    });
  
  });

  describe("findWinner", () => {
    test("find the winner.", () => {
      const firstTest = [
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"]
      ];
      expect(findWinner(firstTest)).toBe("X");
    });
  
  });