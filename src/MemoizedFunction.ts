
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

type Fn = (...params: any) => any

function MemoizedFunction(fn: Fn):Fn {
        return ((...params: any) => {
            const Memos:Map<string,any> = new Map();
            var key:string= params.join().toString();
            if(Memos.has(key)){
                return Memos.get(key);
            }
            var result = fn(...params);
            Memos.set(key,result);
            return key => result;
        })();
}

module.exports = {MemoizedCall,Sum,Fib,Factorial};