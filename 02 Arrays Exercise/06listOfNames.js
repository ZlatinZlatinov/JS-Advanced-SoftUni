function listOfNames(userInput) {
    let x = 1;
    userInput.sort((a, b) => a.localeCompare(b)); 
    for (let element of userInput) {
        console.log(`${x}.${element}`); 
        x++;
    }
} // 100/100
listOfNames(["John", "Bob", "Christina", "Ema"]); 
