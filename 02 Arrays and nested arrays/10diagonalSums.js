function diagonalSums(input) {
    let diag1 = 0, diag2 = 0;
    let i = 0, k = input.length - 1;
    for (let arr of input) {
        diag1 += arr[i];
        i++;
        diag2 += arr[k];
        k--;
    }
    return `${diag1} ${diag2}`;
} // 100/100
console.log(diagonalSums([[20, 40],
[10, 60]]));
console.log(diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]));