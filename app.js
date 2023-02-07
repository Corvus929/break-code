// Constants
// Start new game button
// Start attempt over button
// Pegs to make guess
const startBtn = document.getElementById('first');
const overBtn = document.getElementById('second');

// State variables 
// Render board
// Guess number
// Pegs by row
let board;
let guessNum;
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
    while (secretCue.length < 6) {
        let ran = String(Math.floor(Math.random() * 10));
        if (ran <= 6) {
            secretCue.push(ran);
        }
    };
console.log(secretCue);
};
secretNum();

render();

function render() {
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
    [0, 0, 0],
    [0, 0, 0]
]
}

// Event listeners
// Clear attempt on click
// Start new game on click
// Copy color of peg clicked to peg in row matching attempt number on click


