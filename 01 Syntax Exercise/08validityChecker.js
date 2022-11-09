function validityChecker(x1, y1, x2, y2) {
    let res1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2).toString();
    let res2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2).toString();
    let res3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toString();


    if (res1.includes('.')) {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }

    if (res2.includes('.')) {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }

    if (res3.includes('.')) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
} // 100/100
validityChecker(3, 0, 0, 4);
console.log('-------------');
validityChecker(2, 1, 1, 1);