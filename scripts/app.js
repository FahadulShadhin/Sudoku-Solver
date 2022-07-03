const solveButton = document.querySelector("#solve-button")
const clearButton = document.querySelector("#clear-button")
let board = []

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
