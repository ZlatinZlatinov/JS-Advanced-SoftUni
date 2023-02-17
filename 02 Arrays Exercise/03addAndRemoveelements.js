function addAndRemoveelements(input) {
    let arr = [];
    let num = 1;

    for (let command of input) {
        switch (command) {
            case 'add':
                arr.push(num);
                num++
                break;
            case 'remove':
                let n = arr.pop();
                num++
                break;
        }
    }
    if (arr.length == 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
} // 100/100
// addAndRemoveelements(['add',
//     'add',
//     'add',
//     'add']);
addAndRemoveelements(['add',
    'add',
    'remove',
    'add',
    'add']);
addAndRemoveelements(['remove',
    'remove',
    'remove'])