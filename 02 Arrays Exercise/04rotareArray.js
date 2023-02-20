function rotareArray(arr, rotationTimes) {
    let num = 0;

    while (num < rotationTimes) {
        arr.unshift(arr.pop());
        num++;
    }
    return arr.join(' ');
} // 100/100
rotareArray(['1',
    '2',
    '3',
    '4'],
    2);
rotareArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);