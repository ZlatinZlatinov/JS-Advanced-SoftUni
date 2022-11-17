function negativePositiveNums(input) {
    let arr = []; 
    for (let num of input) {
        if (num < 0) {
            arr.unshift(num);
        } else {
            arr.push(num);
        }
    } 
    arr.forEach(n => console.log(n));
} // 100/100
negativePositiveNums([7, -2, 8, 9]); 
negativePositiveNums([3, -2, 0, -1]);