// summon from html
const startBtn = document.getElementById('first');
const redoBtn = document.getElementById('second');
let pegs = document.querySelectorAll('.peg');
let msg = document.querySelector('h1');
let board = document.querySelectorAll('.board');
let results = document.querySelectorAll('.reults');

const choices = {
    '0': 'white',
    '1': 'purple',
    '2': 'green',
    '3': 'pink',
    '4': 'yellow',
    '5': 'red',
    '6': 'lightblue',
}

const answers = ['white', 'green', 'yellow', 'black'];


//global variables
let guessNum = 0;
let attemptNum = 0;
let secretCue;
let selections;
let out;
let up;
let key;

// Functions 

// Create random answer
function secretNum() {
    secretCue = [];
    while (secretCue.length < 4) {
        let ran = String(Math.floor(Math.random() * 10));
        if (ran <= 6 && ran > 0) {
            secretCue.push(ran);
        }
    };
};

init();
function init() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    results = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    selections = [
        '1', '2', '3',
        '4', '5', '6',
    ]
pegs.forEach((peg, i)=> { peg.setAttribute('name', i,)
    peg.style.backgroundColor = `${choices[selections[i]]}`}
);
secretNum();
};

//render board
pegs.forEach((peg)=> {peg.addEventListener('click', makeGuess)});

function makeGuess(evt) {
    guessNum += 1;    
    board.every((cell, row) => {
        out = cell.findIndex((cel)=> {return cel === 0});
        if (out !== -1) {
            up = row;
            return false;
        };
        return true;
    });
    board[up][out] = Object.keys(choices).find(key => 
        choices[key] === evt.target.style.backgroundColor);
    renderBoard();
    if (guessNum > 3) {
        compare();
        guessNum = 0;
        attemptNum += 1;
    }
};

function renderBoard() {
    board.forEach((cell, row) => {
        cell.forEach((elem, col) => {       
            document.getElementById(`c${col}r${row}`).style.backgroundColor = 
            choices[String(elem)];
        });
    });
};

function renderResults() {
    results.forEach((cell, row) => {
        cell.forEach((key, col) => {       
            document.getElementById(`c${col}b${row}`).style.backgroundColor = answers[key]; 
        })
    });
};

startBtn.addEventListener('click', startOver) 
function startOver() {
init();
renderBoard();
renderResults();
attemptNum = 0;
guessNum = 0;
restore();
};

redoBtn.addEventListener('click', emptyAttempt);
function emptyAttempt() {
guessNum = 0;
board[attemptNum] = [0, 0, 0, 0];
renderBoard();
}

function endGame() {
    pegs.forEach((peg)=> {peg.removeEventListener('click', makeGuess)});
    redoBtn.removeEventListener('click', emptyAttempt);
};

function restore() {
    pegs.forEach((peg)=> {peg.addEventListener('click', makeGuess)});
    redoBtn.addEventListener('click', emptyAttempt);
    msg.innerHTML = "Mastermind";
}

function compare() {
    if (attemptNum === board.length - 1) {
        endGame();
        msg.innerHTML = "Out of tries. Start new game";
    }
    board[attemptNum].forEach((cell, idx)=>{
    if (secretCue[idx] === cell) {
    results[attemptNum][idx] = 1;
    }else if(secretCue.includes(cell)) {
        results[attemptNum][idx] = 2;    
    }else {
        results[attemptNum][idx] = 3;
    }
   });
    if(results[attemptNum].every((cell) => cell === 1)){
        msg.innerHTML = "Congrats, you won. Press start new game";
        endGame(); 
    }
 renderResults();
};