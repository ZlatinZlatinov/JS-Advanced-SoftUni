function cookingByNumbers(num, ...operations) {
    num = Number(num); 

    let myFuctionalObejct = {
        chop: function (number) {
            return number / 2;
        }, 
        dice: function (number) {
            return Math.sqrt(number);
        }, 
        spice: function (number) {
            return number + 1;
        }, 
        bake: function (number) {
            return number * 3;
        },
        fillet: function (number) {
            return number * 0.80;
        } 
    } 

    for (let element of operations) {         
        num = myFuctionalObejct[element](num); 
        console.log(num); 
    }
} // also works 100/100
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'); 
console.log('------');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');