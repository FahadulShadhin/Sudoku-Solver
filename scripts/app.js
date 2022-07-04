const solveButton = document.querySelector("#solve-button")
const clearButton = document.querySelector("#clear-button")
const loadButton = document.querySelector('#load-button')
let board = []

// const getRandomIndex = () => {
//     maxLimit = 2
//     let rand = Math.random() * maxLimit;
//     randNum = Math.floor(rand)
//     return randNum
// }

loadRandomBoard = () => {
    const inputs = document.querySelectorAll('input')
    let savedBoard = boards["1"]

    for(let i=0; i<savedBoard.length; i++) {
        if(savedBoard[i] == 0) {
            inputs[i].value = ""
        } else {
            inputs[i].value = savedBoard[i]
        }
    }
    savedBoard = []
}

insertValues = () => {
    const inputs = document.querySelectorAll('input')

    inputs.forEach((input) => {
        if(input.value) {
            board.push(parseInt(input.value))
            input.classList.add('input-el') 
        } else {
            board.push(0)
            input.classList.add('empty-el')
        }
    })
}

populateValues = () => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input, i) => {
        input.value = board[i]
    })
}

solveButton.addEventListener('click', () => {
    insertValues()
    solve()
    populateValues()
})

clearButton.addEventListener('click', () => {
    window.location.reload(true)
})

loadButton.addEventListener('click', () => {
    loadRandomBoard()
})