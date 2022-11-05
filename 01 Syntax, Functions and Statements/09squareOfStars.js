function squareOfStars(num) { 
    let str = '*';
    for (let i = 0; i < num; i++) {
        console.log(str.repeat(num).split('').join(' '));
    }
} // 100/100
squareOfStars(2);