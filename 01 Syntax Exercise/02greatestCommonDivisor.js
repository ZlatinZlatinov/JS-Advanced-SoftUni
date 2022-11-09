function greatestCommonDivisor(a, b) {
    let num = 0; 
    if (a < b) {
        num = a;
    } else {
        num = b;
    } 
    let newArr = []; 

    for (let x = 1; x<= num; x++) {
        if (a % x == 0 && b % x == 0) {
            newArr.push(x);
        }
    } 
    console.log(newArr.sort((a,b) => b - a)[0]);
} // 100/100
greatestCommonDivisor(15, 5); 
greatestCommonDivisor(2154, 458);