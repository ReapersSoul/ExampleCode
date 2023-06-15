"use strict";
function Sum(one, two) {
    return one + two;
}
function Fib(n) {
}
function Factorial(n) {
}
function MemoizedCall(Memos, fn) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (!Memos) {
        Memos = {};
    }
    var Memoized = true;
    var key = fn.name;
    var SubKey = args.toString();
    if (!Memos[key]) {
        Memos[key] = {};
    }
    if (!Memos[key][SubKey]) {
        Memoized = false;
        Memos[key][SubKey] = fn.apply(void 0, args);
    }
    return { Value: Memos[key][SubKey], WasMemoized: Memoized };
}
module.exports = { MemoizedCall: MemoizedCall, Sum: Sum, Fib: Fib, Factorial: Factorial };
