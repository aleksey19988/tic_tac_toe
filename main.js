const field = document.getElementById('field-container'); // Находим поле с ячейками
let moveCount = 0; // Вводим переменную для понимания кто ходит, крестики или нолики
const winningStrategy = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let result = null;

const checkVictory = () => {
    const cells = document.getElementsByClassName('game-cell');// Получили все ячейки в виде массива
    for (let i = 0; i < winningStrategy.length; i++) {
        if (cells[winningStrategy[i][0]].innerHTML === 'X' && cells[winningStrategy[i][1]].innerHTML === 'X' && cells[winningStrategy[i][2]].innerHTML === 'X') {
            result = 'крестики';
            displayResult(result);
            console.log('Крестики!');
        } else if (cells[winningStrategy[i][0]].innerHTML === 'O' && cells[winningStrategy[i][1]].innerHTML === 'O' && cells[winningStrategy[i][2]].innerHTML === 'O') {
            result = 'нолики';
            displayResult(result);
        }
    }
}

const displayResult = (result) => {
    document.getElementById('modal-window-content').innerHTML = `Выиграли ${result}!`;//Записали результат во всплывающее окно
    document.getElementById('modal-container').style.display = 'flex';
}

field.addEventListener('click', function(event) {
    if (event.target.className === 'game-cell') {// Если элемент, по которому кликнули имеет класс 'game-cell'
        if (event.target.textContent === '') {
            moveCount % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';
            moveCount++;
            checkVictory();
        }
        if (moveCount > 8) {
            result = 'Ничья';
            document.getElementById('modal-window-content').innerHTML = `${result}!`;//Записали результат во всплывающее окно
            document.getElementById('modal-container').style.display = 'flex';
        }
    }
});

const closeModal = () => {
    document.getElementById('modal-container').style.display = 'none';
    location.reload();
}

document.getElementById('modal-window-btn').addEventListener('click', closeModal);
document.getElementById('modal-container').addEventListener('click', closeModal);