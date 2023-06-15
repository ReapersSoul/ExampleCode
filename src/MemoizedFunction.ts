
function Sum(one:number,two:number):number {
    return one + two;
}

function Fib(n:number):number {
    if (n <= 1) {
        return 1;
      }
    return Fib(n - 1) + Fib(n - 2);
}

function Factorial(n:number):number {
    if (n == 0){
        return 1;
    }
    return n * Factorial(n - 1);
}

function MemoizedCall(Memos:any,fn:Function,...args:any) {
    if(!Memos) {
        Memos = {};
    }
    var Memoized:boolean=true;
    var key:string = fn.name;
    var SubKey = args.toString();
    if(!Memos[key]) {
        Memos[key] = {};
    }
    if(!Memos[key][SubKey]) {
        Memoized=false;
        Memos[key][SubKey] = fn(...args);
    }
    return {Value:Memos[key][SubKey],WasMemoized:Memoized};
}

module.exports = {MemoizedCall,Sum,Fib,Factorial};