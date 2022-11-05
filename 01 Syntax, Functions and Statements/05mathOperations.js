function mathOperations(num1, num2, operator) { 
    let res = 0; 
    switch (operator) {
        case '+' : 
        res = num1 + num2; 
        break;
        case '-' : 
        res = num1 - num2; 
        break;
        case '*' : 
        res = num1 * num2; 
        break; 
        case '/' : 
        res = num1 / num2; 
        break; 
        case '%' :  
        res = num1 % num2; 
        break;
        case '**' : 
        res = num1 ** num2; 
        break;
    } 
    console.log(res);
} // 100/100 sig moje i po-kratko
mathOperations(5, 6, '+'); 
mathOperations(3, 5.5, '*');