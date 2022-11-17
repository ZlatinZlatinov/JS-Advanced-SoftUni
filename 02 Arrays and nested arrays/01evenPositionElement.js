function evenPositionElement(arr) {
    console.log(arr.filter((e, i)=> i % 2 == 0).join(' '));
} // 100/100
evenPositionElement(['20', '30', '40', '50', '60']); 
evenPositionElement(['5', '10']);