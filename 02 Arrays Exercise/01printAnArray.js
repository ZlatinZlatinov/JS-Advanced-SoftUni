function printAnArray(arr, delimiter) {
    return arr.join(`${delimiter}`);
} // 100/100
console.log(printAnArray(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-')); 

console.log(printAnArray(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'));