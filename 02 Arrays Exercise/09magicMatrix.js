function magicMatrix(userInput) {
    //let sum1 = 0; 
    let bull = true;
    let rowSum = []; let colSum = [];

    let counter = 0;
    for (let x = 0; x < userInput.length; x++) {
        let arr = userInput[x];
        //sum1 += userInput[x][0] 
        let sum1 = 0;
        let sum2 = 0;
        for (let num of arr) {
            sum2 += num;
        }
        rowSum.push(sum2);

        for (let y = 0; y < arr.length; y++) {
            sum1 += userInput[y][x];
            //sum2 += arr[y];
        }
        colSum.push(sum1);
        if (sum1 == sum2) {
            counter++;
            //bull = true;
        }
    }

    for (let x = 0; x < colSum.length; x++) {
        let num1 = rowSum[x];
        let num2 = colSum[x];
        if (num1 != num2) {
            return false;
        }
    }
    return bull;
    //return bull; 
    // if ( counter == userInput.length) {
    //     return true;
    // } else {
    //     return false;
    // }
} // 50-66 /100 pff nope look down
magicMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);
magicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
);
magicMatrix([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);


function magicMatrix2(userInput) {
    let bull = true;
    for (let x = 0; x < userInput.length - 1; x++) {
        let currRowSum = userInput[x].reduce((a, b) => a + b, 0);
        let nextRowSum = userInput[x + 1].reduce((a, b) => a + b, 0);

        let sumCol = 0;
        let sumNextCol = 0;
        for (let y = 0; y < userInput.length; y++) {
            sumCol += userInput[y][x];
            sumNextCol += userInput[y][x + 1];
        }
        if (currRowSum != nextRowSum || sumCol != sumNextCol) {
            bull = false;
        }
    }
    //console.log(bull); 
    return bull;
} // 100/100
magicMatrix2([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
magicMatrix2([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
magicMatrix2([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);