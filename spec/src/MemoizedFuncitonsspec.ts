const _ = require('../../js/MemoizedFunction.js');

describe("MemoizedCall", () => {
    it("returns an object containing the result of the function and if it was retrieved from the memos list or the function was actually run", () => {
        expect(_.MemoizedCall(_.Sum,1,2)).toEqual({Value:3,WasMemoized:false});
        expect(_.MemoizedCall(_.Sum,1,2)).toEqual({Value:3,WasMemoized:true});
    });
})