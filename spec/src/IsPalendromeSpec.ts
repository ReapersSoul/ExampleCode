const IsPalendrome = require('../../js/IsPalendrome.js');

describe("IsPalendrome", () => {
    it("returns true if the specified string is a palendrome", () => {
        var Test1Result=IsPalendrome("A man a plan a canal panama");
        var Test2Result=IsPalendrome("racecar");
        var Test3Result=IsPalendrome("");
        var Test4Result=IsPalendrome("A large rat");
        var Test5Result=IsPalendrome("Random words dont make a good sentance");
        expect(Test1Result).toBe(true);
        expect(Test2Result).toBe(true);
        expect(Test3Result).toBe(true);
        expect(Test4Result).toBe(false);
        expect(Test5Result).toBe(false);
    });
  })