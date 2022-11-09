function fruit(fruits, wieghtGrams, cost){
    let result = (wieghtGrams / 1000) * cost; 
    console.log(`I need $${result.toFixed(2)} to buy ${(wieghtGrams / 1000).toFixed(2)} kilograms ${fruits}.`);
} // 100/100 ydb
fruit('orange', 2500, 1.80); 