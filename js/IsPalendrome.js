"use strict";
function IsPalendrome(str) {
    //remove whitespace and make everything lowercase
    var tmpstr = str.toLowerCase().replace(/\s/g, "");
    //console.log(tmpstr);
    //reverse the string
    var rev = tmpstr.split('').reverse().join('');
    //console.log(rev)
    //return true if rev and tmpstring are the same
    return rev == tmpstr;
}
module.exports = IsPalendrome;
