function sortArrayBy2criteria(userInput) {
    return userInput.sort(sortby2criteria).join('\n');

    function sortby2criteria(currElement, nextElement) {
        if (currElement.length == nextElement.length) {
            return currElement.localeCompare(nextElement);
        } // else - 
        return currElement.length - nextElement.length;
    }
} // 100/100
console.log(sortArrayBy2criteria(['alpha',
    'beta',
    'gamma']));
console.log('-----');
console.log(sortArrayBy2criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']));
console.log('-----');
console.log(sortArrayBy2criteria(['test',
    'Deny',
    'omen',
    'Default']
));