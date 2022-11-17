function smallest2Nums(arr) {
    console.log(
        arr
        .sort((a, b) => a - b)
        .filter((x, i) => i < 2)
        .join(' '));
} // 100/100
smallest2Nums([30, 15, 50, 5]);
smallest2Nums([3, 0, 10, 4, 7, 3]);