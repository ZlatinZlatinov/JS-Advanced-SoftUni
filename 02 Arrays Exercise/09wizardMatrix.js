function wizard(matrix) {

    for (let x = 0; x < matrix.length - 1; x++) {
        let sumRow = matrix[x].reduce((a, b) => a + b, 0);
        let sumNextRow = matrix[x + 1].reduce((a, b) => a + b, 0);

        let sumCol = 0;
        let sumNextCol = 0;

        for (let y = 0; y < matrix.length; y++) {
            sumCol += matrix[x][y];
            sumNextCol += matrix[x + 1][y];
        }

        if (sumRow !== sumNextRow || sumCol !== sumNextCol) {
            return false;
        }
    }
    return true;
} // 100/100 #TodorStoynov :)

wizard(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

console.log(wizard([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));