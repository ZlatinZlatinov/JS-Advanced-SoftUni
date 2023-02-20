function extractIncreasingSubset(userInput) {
    let arr = []; let biggestNum = 0;
    for (let num of userInput) {
        if (num >= biggestNum) {
            biggestNum = num; 
            arr.push(biggestNum);
        } 
    }
    return arr;
} // 100/100
console.log(extractIncreasingSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log(extractIncreasingSubset([1,
    2,
    3,
    4]));
console.log(extractIncreasingSubset([20,
    3,
    2,
    15,
    6,
    1]));