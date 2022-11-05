function someElements(arr) {
    console.log(arr.reduce((a,b) => a + b));  
    // let res = 0; 
    // arr.forEach(n => res += 1/n); 
    // console.log(res); 
    console.log(arr.map(n => 1/n).reduce((a,b) => a + b)); // 2nd method
    console.log(arr.join(''));
} 
someElements([1, 2, 3]);