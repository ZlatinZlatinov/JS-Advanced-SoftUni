function equalNeighBors(input) {
    let matchCount = 0;
    for (let x = 0; x < input.length - 1; x++) {
        let currentArr = input[x];
        let nextArr = input[x + 1];
        for (let y = 0; y < currentArr.length; y++) {
            if (currentArr[y] === nextArr[y]) {
                matchCount++;
            }
        } 
    } 

    for (let currentArr of input) {
        for (let y = 0; y < currentArr.length - 1; y++) {
            if (currentArr[y] === currentArr[y + 1]) {
                matchCount++;
            }
        }
    }
    return matchCount;
} // 100/100
console.log(equalNeighBors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));
console.log(equalNeighBors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));