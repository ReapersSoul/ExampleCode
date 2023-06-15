function IsPalendrome(str:string) {
    //remove whitespace and make everything lowercase
    var tmpstr:string = str.toLowerCase().replace(/\s/g, "");
    //console.log(tmpstr);
    //reverse the string
    let rev = tmpstr.split('').reverse().join('');
    //console.log(rev)
    //return true if rev and tmpstring are the same
    return rev == tmpstr;
}

function TestPalendrome(PrintTests:boolean) {
    //save results for return value
    var Test1Result=IsPalendrome("A man a plan a canal panama");
    var Test2Result=IsPalendrome("racecar");
    var Test3Result=IsPalendrome("");
    var Test4Result=IsPalendrome("A large rat");
    var Test5Result=IsPalendrome("Random words dont make a good sentance");
    //print test cases if PrintTests is true
    if(PrintTests){
        console.log("Test Case # : Result : Expected Result");
        console.log(`Test Case 1 : ${Test1Result} : true`);
        console.log(`Test Case 2 : ${Test2Result} : true`);
        console.log(`Test Case 3 : ${Test3Result} : true`);
        console.log(`Test Case 4 : ${Test4Result} : false`);
        console.log(`Test Case 5 : ${Test5Result} : false`);
    }
    //return true if all test cases matched their expected results
    return Test1Result&&Test2Result&&Test3Result&&!(Test4Result&&Test5Result);
}

module.exports = IsPalendrome;