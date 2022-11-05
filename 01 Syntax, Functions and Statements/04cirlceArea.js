function cirlceArea(radius) {
    if (typeof radius == 'number') {
        let area = radius * radius * Math.PI; 
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
} //100/100
cirlceArea(5); 
cirlceArea('adad');