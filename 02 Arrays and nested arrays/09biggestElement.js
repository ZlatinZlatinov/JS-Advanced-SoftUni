function biggestElement(arr) {
    let arr1 = []; 
    for (let el of arr) {
        arr1.push(Math.max(...el));
    } 
    return arr1.sort((a, z) => z -a)[0];
} // 100/100
console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]));
console.log(biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]));