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
    if (Memos == undefined) {
        Memos = {};
    }
    var key = fn.name;
    var SubKey = args.toString();
    if (Memos[key] == undefined) {
        Memos[key] = {};
    }
    if (Memos[key][SubKey] == undefined) {
        console.log("UnMemoizedCall: " + key + " " + SubKey);
        Memos[key][SubKey] = fn.apply(void 0, args);
    }
    return Memos[key][SubKey];
}
//test
console.log(MemoizedCall(Sum, 1, 2));
console.log(MemoizedCall(Sum, 1, 2));
console.log(MemoizedCall(Sum, 3, 2));
console.log(MemoizedCall(Sum, 3, 2));
console.log(Memos);
module.exports = MemoizedCall;
