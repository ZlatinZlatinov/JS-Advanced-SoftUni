function daysOfMonth(month, year) { 
    month -=1;
    let date = String(new Date(year, month)); 
    date = date.split(' ');
    let monthy = date[1], yeaR = date [3]; 
    let res = 0;  
    
    switch (monthy) {
        case 'Jan' : 
        res = 31;
        break;  

        case 'Feb' : 
        if (yeaR % 4 == 0 && yeaR % 100 != 0) {
            res = 29;
        } else {
            res = 28;
        } 
        break; 

        case 'Mar' : 
        res = 31;
        break; 

        case 'Apr' : 
        res = 30;
        break; 

        case 'May' : 
        res = 31;
        break; 

        case 'Jun' : 
        res = 30;
        break; 

        case 'Jul' : 
        res = 31;
        break; 

        case 'Aug' : 
        res = 31;
        break; 

        case 'Sep' : 
        res = 30;
        break; 

        case 'Oct' : 
        res = 31;
        break;

        case 'Nov' : 
        res = 30;
        break;

        case 'Dec' : 
        res = 31;
        break;
    } 
    console.log(res);
} // 100/100 че само 3 теста хдд
daysOfMonth(1, 2012)