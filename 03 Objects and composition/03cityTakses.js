function cityTaxes(name, population, treasury) {
    let myCity = {
        name,
        population, 
        treasury, 
        'taxRate': 10, 
        collectTaxes() {this.treasury += Math.floor(this.population * this.taxRate)}, 
        applyGrowth(percentage) {this.population += Math.floor(this.population * percentage / 100)}, 
        applyRecession(percentage) {this.treasury -= Math.floor(this.treasury * percentage / 100)}
    } 
    return myCity;
} // 100/100 syntax error xdd

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city); 

const city2 =
  cityTaxes('Tortuga',
  7000,
  15000);
city2.collectTaxes();
console.log(city2.treasury);
city2.applyGrowth(5);
console.log(city2.population); 
city2.applyRecession(10); 
console.log(city2.treasury); 

const city3 = cityTaxes('Sofia', 2000000, 1000000); 
city3.collectTaxes(); 
console.log(city3.treasury);



