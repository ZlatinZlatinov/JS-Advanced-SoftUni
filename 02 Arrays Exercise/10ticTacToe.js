function ticTacToe(userInput) {
    let initialState = // decalring the initial state, by default everything is false
        [[false, false, false],
        [false, false, false],
        [false, false, false]];

    let i = 0; let player = ''; let winner = false; // i determines wich player is on turn, winner - if we have a winner, and a player
    for (let line of userInput) { // for - of loop to loop through the input
        let [num1, num2] = line.split(' ').map(Number);

        if (i % 2 == 0) { // detiermines wich player is on move
            player = 'X';
        } else {
            player = 'O';
        }

        if (initialState[num1][num2] == false) { // checks if the place is taken and if not player marks the position on the initialState
            switch (player) {
                case 'X':
                    initialState[num1][num2] = 'X';
                    break;
                case 'O':
                    initialState[num1][num2] = 'O';
                    break;
            }
        } else { // if the place is already marked we log the message  and continue
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        if ((rowCount(initialState) || colCount(initialState) || diag1Count(initialState) || diag2Count(initialState)) == true) {
            // functions that return boolean value and if one of them returns true, we have a winner
            winner = true;
            switch (player) {
                case 'X':
                    console.log(`Player ${player} wins!`);
                    break;
                case 'O':
                    console.log(`Player ${player} wins!`);
                    break;
            }
            break;
        }

        if (gameEnd(initialState) == true) { // function to check if the game has ended
            break;
        }

        i++; // increments the i value so that we can switch between players
    }

    if (winner == false) { // checks if there is a winner and if not it prints the message
        console.log('The game ended! Nobody wins :(');
    }

    for (let arr of initialState) { // prints  the initialState
        console.log(arr.join('\t'));
    }


    function rowCount(initialState) { // counts the signs/symbols in the rows and if we have 3 eqaul on a row it returns true
        for (let x = 0; x < 3; x++) {
            let xCountRow = 0; let oCountRow = 0; // counters to count X and O
            let curArr = initialState[x];

            for (let symbol of curArr) {
                if (symbol === 'X') {
                    xCountRow++;
                } else if (symbol === 'O') {
                    oCountRow++;
                }
            }

            if ((xCountRow || oCountRow) == 3) {
                return true;
            }
        }
    }

    function colCount(initialState) { // counts the signs/symbols in the colum and if we have 3 eqaul in a colum it returns true
        for (let x = 0; x < 3; x++) {
            let oCountCol = 0; let xCountCol = 0; // counters to count X and O
            let col = [initialState[0][x], initialState[1][x], initialState[2][x]];

            for (let symbol of col) {
                if (symbol === 'X') {
                    xCountCol++;
                } else if (symbol === 'O') {
                    oCountCol++;
                }
            }

            if ((xCountCol || oCountCol) == 3) {
                return true;
            }
        }
    }

    function diag1Count(initialState) { // counts the signs/symbols in 1st diagonal and if we have 3 eqaul it returns true
        let diag1 = [initialState[0][0], initialState[1][1], initialState[2][2]];
        let xCountDiag1 = 0; let oCountDiag1 = 0; // counters to count X and O

        for (let symbol of diag1) {
            if (symbol === 'X') {
                xCountDiag1++;
            } else if (symbol === 'O') {
                oCountDiag1++;
            }

            if ((oCountDiag1 || xCountDiag1) == 3) {
                return true;
            }
        }
    }

    function diag2Count(initialState) { // counts the signs/symbols in 2nd diagonal and if we have 3 eqaul it returns true
        let diag2 = [initialState[0][2], initialState[1][1], initialState[2][1]];
        let xCountDiag2 = 0; let oCountDiag2 = 0; // counters to count X and O

        for (let symbol of diag2) {
            if (symbol === 'X') {
                xCountDiag2++;
            } else if (symbol === 'O') {
                oCountDiag2++;
            }

            if ((xCountDiag2 || oCountDiag2) == 3) {
                return true;
            }
        }
    }

    function gameEnd(initialState) { // checks if every place is marked and if it is, it returns true and game ends
        for (let line of initialState) {
            for (let symbol of line) {
                if (symbol == false) {
                    return false;
                }
            }
        }
        return true;
    }
} // emm za sega 90/100 мисла да го оставя така XDDD
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);
console.log('-----');
ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);
console.log('-----');
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);