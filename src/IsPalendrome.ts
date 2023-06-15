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

module.exports = IsPalendrome;