function sortingNumbers(userInput) {
    let arr1 = userInput.slice().sort((a, z) => a - z);
    let result = [];

    while (arr1.length > 0) {
        result.push(arr1.shift());
        result.push(arr1.pop());
    }

    return result;
} // 100/100
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])); 