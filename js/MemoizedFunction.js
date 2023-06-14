"use strict";
function Sum(one, two) {
    return one + two;
}
function Fib(n) {
}
function Factorial(n) {
}
var Memos;
function MemoizedCall(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var Memoized = true;
    if (Memos == undefined) {
        Memos = {};
    }
    var key = fn.name;
    var SubKey = args.toString();
    if (Memos[key] == undefined) {
        Memos[key] = {};
    }
    if (Memos[key][SubKey] == undefined) {
        Memoized = false;
        Memos[key][SubKey] = fn.apply(void 0, args);
    }
    return { Value: Memos[key][SubKey], WasMemoized: Memoized };
}
//test
console.log(MemoizedCall(Sum, 1, 2));
console.log(MemoizedCall(Sum, 1, 2));
console.log(MemoizedCall(Sum, 3, 2));
console.log(MemoizedCall(Sum, 3, 2));
console.log(Memos);
module.exports = { MemoizedCall: MemoizedCall, Memos: Memos, Sum: Sum, Fib: Fib, Factorial: Factorial };
