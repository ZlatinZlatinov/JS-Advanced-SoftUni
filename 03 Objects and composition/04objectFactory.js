function factory(lib, ordersArray) { 
    let myArr = [];

    for (let obj of ordersArray) {
        let resultObject = {}; 
        let key = Object.keys(obj.template); 
        resultObject[key] = obj['template'][key];  
        
        for (let part of obj.parts) {
            resultObject[part] = lib[part];
        } 
        myArr.push(resultObject);
    } 
    return myArr; // seems more clean now xdd
} // 100/100 works just fine

// What is called an 'input': 
const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  products[0].print();
  