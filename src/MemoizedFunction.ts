
function Sum(one:number,two:number) {
    return one + two;
}

function Fib(n:number) {
    
}

function Factorial(n:number) {
    
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