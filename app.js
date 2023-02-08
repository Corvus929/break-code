// Constants
const startBtn = document.getElementById('first');
const overBtn = document.getElementById('second');
let pegs = document.querySelectorAll('.peg');

const choices = {
    '1': 'purple',
    '2': 'green',
    '3': 'pink',
    '4': 'yellow',
    '5': 'red',
    '6': 'lightblue',
}

// State variables 
// Render board
// Guess number
// Pegs by row
let board = document.querySelectorAll('.board');
let guessNum;
let attemptNum = 0;
let secretCue = [];
let selections;

// Cached variables
// Win/loss message
let msgW = "Congrats! Start new game";
let msgL = "Start new game";

// Functions 
// Check/compare guess against answer
// Check if guess number is = max number of guesses
//update board

// Create random answer
function secretNum() {
    while (secretCue.length < 4) {
        let ran = String(Math.floor(Math.random() * 10));
        if (ran <= 6) {
            secretCue.push(ran);
        }
    };
};

secretNum();
console.log(secretCue);

//render board
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
    selections = [
        '1', '2', '3',
        '4', '5', '6',
    ]
pegs.forEach((peg, i)=> { peg.setAttribute('name', i,)
    peg.style.backgroundColor = `${choices[selections[i]]}`}
);
};
document.getElementById('markers').addEventListener('click', makeGuess);

function makeGuess(evt) {
    guessNum += 1;
    if (guessNum > 4) {
        guessNum = 0;
        attemptNum += 1;
    }
console.log(attemptNum);
    board.splice(attemptNum, guessNum, 1, evt.target);
compare();
}

function compare() {
     if (secretCue === board[attemptNum]);
}
   


/*
push clicked peg into board
render based on board[][] array
compare
*/


/*
When peg is clicked copy value into next empty cell 
every 4 cells compare row (guess) with secretCue
display comparison
if winner winnerText
if not, keep playing on next row
if no more cells then loserText
*/



/*
clear attempt clear boardindex  
start new game clear all indexs
*/

// Event listeners
// Clear attempt on click
// Start new game on click
// Copy color of peg clicked to peg in row matching attempt number on click


