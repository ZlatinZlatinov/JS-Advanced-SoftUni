function cookingByNumbers (num, ...commands) {
    num = Number(num); 
    for (let line of commands) {
        switch(line) {
            case 'chop': 
            num /= 2;
            break; 

            case 'dice': 
            num = Math.sqrt(num);
            break; 

            case 'spice': 
            num++;
            break; 

            case 'bake': 
            num *= 3;
            break; 

            case 'fillet': 
            num *= 0.80;
            break;
        } 
        console.log(num);
    }
} // 100/100
//cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'); 
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');