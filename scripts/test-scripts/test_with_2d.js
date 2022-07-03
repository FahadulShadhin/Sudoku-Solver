const board = [
    [0, 5, 1, 3, 6, 2, 7, 0, 0],
    [0, 4, 0, 0, 5, 8, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 2, 5],
    [0, 8, 0, 0, 0, 0, 9, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 5, 0, 0, 0, 0, 8, 0],
    [1, 2, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 2, 8, 0, 0, 6, 0],
    [0, 0, 8, 5, 3, 4, 2, 9, 0]
];

// console.log(board)

const findEmptyIndex = (board) => {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === 0) 
                return [i, j];
        }
    }
    return [-1, -1];
}

const checkRow = (board, row, value) => {
    for(var i = 0; i < board[row].length; i++) {
        if(board[row][i] === value) {
            return false;
        }
    }
    return true;
}

const checkColumn = (board, column, value) => {
    for(var i = 0; i < board.length; i++) {
        if(board[i][column] === value) {
            return false;
        }
    }
    return true;
}

const checkSquare = (board, row, column, value) => {
    boxRow = Math.floor(row / 3) * 3;
    boxCol = Math.floor(column / 3) * 3;
    
    for (var r = 0; r < 3; r++){
        for (var c = 0; c < 3; c++){
            if (board[boxRow + r][boxCol + c] === value)
                return false;
        }
    }
    return true;
}

const checkValue = (board, row, column, value) => {
    if(checkRow(board, row, value) &&
      checkColumn(board, column, value) &&
      checkSquare(board, row, column, value)) {
        return true;
    }
    
    return false; 
};

const solve = (board) => {  
    let emptySpot = findEmptyIndex(board);
    let row = emptySpot[0];
    let col = emptySpot[1];

    // there is no more empty spots
    if (row === -1){
        return board;
    }

    for(let num = 1; num<=9; num++){
        if (checkValue(board, row, col, num)){
            board[row][col] = num;
            // console.log(board)
            solve(board);
        }
    }

    if (findEmptyIndex(board)[0] !== -1)
        board[row][col] = 0;

    return board;
}
// solve(board)
// console.log(findEmptyIndex(board))
console.log(solve(board))