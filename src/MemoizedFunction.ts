
function Sum(one:number,two:number) {
    return one + two;
}

function Fib(n:number) {
    
}

function Factorial(n:number) {
    
}

var Memos:any;
function MemoizedCall(fn:Function,...args:any) {
    var Memoized:boolean=true;
    if(Memos == undefined) {
        Memos = {};
    }
    var key = fn.name;
    var SubKey = args.toString();
    if(Memos[key] == undefined) {
        Memos[key] = {};
    }
    if(Memos[key][SubKey] == undefined) {
        Memoized=false;
        Memos[key][SubKey] = fn(...args);
    }
    return {Value:Memos[key][SubKey],WasMemoized:Memoized};
}

//test
console.log(MemoizedCall(Sum,1,2));
console.log(MemoizedCall(Sum,1,2));
console.log(MemoizedCall(Sum,3,2));
console.log(MemoizedCall(Sum,3,2));
console.log(Memos);

module.exports = {MemoizedCall,Memos,Sum,Fib,Factorial};