const sudokuBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");
const squares = 81
var grid = []
var temp = []

for (let i=0; i<squares; i++) {
    const inputElement = document.createElement("input");
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', 1);
    inputElement.setAttribute('max', 9);

    sudokuBoard.appendChild(inputElement);
}

function insertValues() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((val, key) => {
        if(key%9 === 0 && key !== 0) {
            grid.push(temp)
            temp = []
        }

        if(val.value) {
            temp.push(val.value)
        } else {
            temp.push('.')
        }
    })
    grid.push(temp)

    console.log(grid)
}

solveButton.addEventListener('click', insertValues)
