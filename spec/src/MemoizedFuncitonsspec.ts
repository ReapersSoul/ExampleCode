const _ = require('../../js/MemoizedFunction.js');

var Memos: object = {};

describe("MemoizedCall", () => {
    it("returns an object containing the result of the function and if it was retrieved from the memos list or the function was actually run", () => {
        expect(_.MemoizedCall(Memos, _.Sum, 1, 2)).toEqual({ Value: 3, WasMemoized: false });
        expect(_.MemoizedCall(Memos, _.Sum, 1, 2)).toEqual({ Value: 3, WasMemoized: true });
        expect(Memos).toEqual({ Sum: { '1,2': 3 } });
    });
})