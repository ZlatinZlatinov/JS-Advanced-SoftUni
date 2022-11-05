function sumOFNums(a,b) { 
    let sum = 0;
    a = Number(a), b = Number(b); 
    for (let i = a; i <= b; i++) {
        sum += i;
    } 
    console.log(sum);
} // 100/100
sumOFNums('1', '5')