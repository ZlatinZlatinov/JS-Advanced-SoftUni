function lastKsequence(a, b) {
    let arr = [1];
    while (arr.length < a) {
        let sum = arr.slice(-b);
        sum = sum.reduce((a, b) => a + b);
        arr.push(sum);
    }
    return arr;
} // 100/100
lastKsequence(6, 3);
lastKsequence(8, 2);