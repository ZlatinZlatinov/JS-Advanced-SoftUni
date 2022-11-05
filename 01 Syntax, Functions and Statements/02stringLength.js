function stringLength(a, b, c) {
    let sum = String(a+b+c).length; 
    let avg = sum / 3; 
    console.log(sum); 
    console.log(Math.floor(avg));
} // 100/100
stringLength('chocolate', 'ice cream', 'cake');