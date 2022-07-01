const sudokuBoard = document.querySelector("#puzzle")
const solveButton = document.querySelector("#solve-button")
const squares = 81
let board = []

for (let i=0; i<squares; i++) {
    const inputElement = document.createElement("input")
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', '1')
    inputElement.setAttribute('max', '9')

    if (
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
        ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
    ) {
        inputElement.classList.add('odd-section')
    }

    sudokuBoard.appendChild(inputElement)
    // inputElement.classList.add('input-el')
}


const insertValues = () => {
    let temp = []
    const inputs = document.querySelectorAll('input')

    inputs.forEach((input) => {
        if(input.value) {
            temp.push(parseInt(input.value))
        } else {
            temp.push(0)
        }
    })

    while(temp.length) {
        board.push(temp.splice(0, 9))
    }
}

const populateValues = (b) => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input, i) => {
        input.value = b[i]
    })
}

const clearValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
        input.value = ""
    })
}

const findEmptyIndex = (board) => {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] === 0) {
                return [i, j]
            }
        }
    }
    return [-1, -1]
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
    boxRow = Math.floor(row/3)*3;
    boxCol = Math.floor(column/3)*3;
    
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

const solve = () => {  
    insertValues()

    let emptySpot = findEmptyIndex(board);
    let row = emptySpot[0]
    let col = emptySpot[1]

    if (row === -1){
        return board
    }

    for(let num = 1; num<=9; num++){
        if (checkValue(board, row, col, num)){
            board[row][col] = num
            solve()
        }
    }

    if (findEmptyIndex(board)[0] !== -1) {
        board[row][col] = 0
    }
} 

const getSolve = () => {
    solve()
    const flatboard = []
    for (row of board) for (e of row) flatboard.push(e);
    populateValues(flatboard)
}
