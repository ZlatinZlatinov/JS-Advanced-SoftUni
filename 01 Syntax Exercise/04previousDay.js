function previousDay (year, month, day) {
    month -= 1;
    let date = new Date(year, month, day); 
    date.setDate(date.getDate() -1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`); 
    // let arr = date.toISOString();//.split(' ');  
    // let res = arr.split('T')[0]; 
    // res = res.split('-');
    // if (res[1][0] == 0) {
    //     res[1] = res[1][1];
    // } 
    // console.log(res.join('-'));
} // 100/100 някой си е правил мноо тежка ебавка с таз задача
previousDay(2016, 9, 30); 
previousDay(2016, 10, 1);