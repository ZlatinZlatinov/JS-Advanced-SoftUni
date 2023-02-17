function printEvereryNthElement(arr, num) {
    return arr.filter((x, i) => i % num == 0);

} // 100.100
printEvereryNthElement(['5', '20', '31', '4', '20'], 2);
printEvereryNthElement(['dsa', 'asd', 'test', 'tset'], 2);