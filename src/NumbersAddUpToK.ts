//works as long as each number in the list is unique
function NumbersAddUpToKTrueFalse(Numbers: number[], K: number) {
    //map to store the possible combinations that add to k
    let NumMap = new Map<number, any>();
    //loop through list of numbers
    for (let i = 0; i < Numbers.length; i++) {
        //add entry to map of the current number and the number that would add up to k
        NumMap.set(Numbers[i], { Index: i, Value: K - Numbers[i] });
        //if the map contains the number that would add up to k then we can return true
        if (NumMap.has(K - Numbers[i])) {
            //make sure its not refering to the same number
            if (NumMap.get(K - Numbers[i]).Index != i) {
                return true;
            }
        }
    }
    //didnt find a solution
    return false;
}

//works as long as each number in the list is unique
function NumbersAddUpToKList(Numbers: number[], K: number) {
    //list for storing combinations in the nummber list that add up to k
    var RetList: any = [];
    //map to store the possible combinations that add to k
    let NumMap = new Map<number, any>();
    //loop through list of numbers
    for (let i = 0; i < Numbers.length; i++) {
        //add entry to map of the current number and the number that would add up to k
        NumMap.set(Numbers[i], { Index: i, Value: K - Numbers[i] });
        //if the map contains the number that would add up to k then we can add the combination to the return list
        if (NumMap.has(K - Numbers[i])) {
            //make sure its not refering to the same number
            if (NumMap.get(K - Numbers[i]).Index != i) {
                RetList.push({ Values: [Numbers[i], K - Numbers[i]], Indecies: [i, NumMap.get(K - Numbers[i]).Index] });
            }
        }
    }
    if (RetList.length == 0) {
        //didnt find a solution
        return false;
    }
    return RetList;
}

function NumbersAddUpToKListNotUnique(Numbers: number[], K: number) {
    //list for storing combinations in the nummber list that add up to k
    var RetList: any = [];
    //map to store the possible combinations that add to k
    var NumMap: any = [];
    //loop through list of numbers
    for (let i = 0; i < Numbers.length; i++) {
        //add entry to map of the current number and the number that would add up to k
        NumMap.push({ Index: i, Value: Numbers[i], Companion: K - Numbers[i] });
        //check NumMap to see if the current Number matches any companions
        for (let j = 0; j < NumMap.length; j++) {
            if (i != NumMap[j].Index) {
                if (Numbers[i] == NumMap[j].Companion) {
                    RetList.push({ Values: [NumMap[j].Value, Numbers[i]], Indecies: [NumMap[j].Index, i] });
                }
            }
        }
    }
    if (RetList.length == 0) {
        //didnt find a solution
        return false;
    }
    return RetList;
}

var _={NumbersAddUpToKTrueFalse, NumbersAddUpToKList, NumbersAddUpToKListNotUnique};
module.exports = _;