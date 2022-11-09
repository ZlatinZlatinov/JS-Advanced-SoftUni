function sameNumbers(num) {
    let arr = String(num).split('').map(Number);
    for (let x = 0; x < arr.length - 1; x++) {
        let currNum = arr[x];
        let nextNum = arr[x + 1];
        if (currNum == nextNum) {
            continue;
        } else {
            console.log('false'); 
            console.log(arr.reduce((a,b) => a + b));
            return;
        }
    }
    console.log('true'); 
    console.log(arr.reduce((a,b) => a + b));
} // 100/100
sameNumbers(2222222);
sameNumbers(1234);