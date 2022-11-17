function processOddPositions(arr) {
    return arr
        .filter((x, i) => i % 2 != 0)
        .map(n => n * 2)
        .reverse()
        .join(' ');
} // 100/100 only 2 tests in judge
console.log(processOddPositions([10, 15, 20, 25]));
console.log('-----');
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));