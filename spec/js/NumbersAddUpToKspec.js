"use strict";
var _ = require('../../js/NumbersAddUpToK.js');
describe("NumbersAddUpToKTrueFalse", function () {
    it("returns true if the specified list contains two numbers that add up to k", function () {
        var Test1Result = _.NumbersAddUpToKTrueFalse([1, 2, 3, 4, 12, 312], 3);
        expect(Test1Result).toBe(true);
    });
});
describe("NumbersAddUpToKList", function () {
    it("returns list of the pairs of numbers in the provided list add up to k as long as the provided list contains unique values", function () {
        var Test2Result = _.NumbersAddUpToKList([1, 2, 3, 4, 12, -8, 312], 4);
        expect(Test2Result).toEqual([{ Values: [3, 1], Indecies: [2, 0] }, { Values: [-8, 12], Indecies: [5, 4] }]);
    });
});
describe("NumbersAddUpToKListNotUnique", function () {
    it("returns list of the pairs of numbers in the provided list add up to k", function () {
        var Test3Result = _.NumbersAddUpToKListNotUnique([1, 2, 2, 3, 4, 12, -8, 312], 4);
        expect(Test3Result).toEqual([{ Values: [2, 2], Indecies: [1, 2] }, { Values: [1, 3], Indecies: [0, 3] }, { Values: [12, -8], Indecies: [5, 6] }]);
    });
});
