// summon from html
const startBtn = document.getElementById('first');
const overBtn = document.getElementById('second');
let pegs = document.querySelectorAll('.peg');
//rewrite msg display functions
let msgW = document.querySelector('h2');
let msgL = document.querySelector('h2');

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
let guessNum = 0;
let attemptNum = 0;
let secretCue = [];
let selections;
let out;
let up;


// Cached variables
// Win/loss message

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

    board[up][out] = Object.keys(choices).find(key => choices[key] === evt.target.style.backgroundColor);
    renderBoard();

if (guessNum > 3) {
        // compare();
        guessNum = 0;
        attemptNum += 1;
    }}

function renderBoard() {
    board.forEach((cell, row) => {
    cell.forEach((elem, col) => {
        
        document.getElementById(`c${col}r${row}`).style.backgroundColor = choices[elem];
    });
    });
}

// function compare() {
//      if (secretCue === board[attemptNum]) {
//         // print all green
//         msgW.innerHTML = "Congrats! Start new game";

//      }else if(/* board at this attempt number contains any of secretCue*/){
//         if (/* if contained thing at index of attemptNum at guessNum === index of secretCue*/) {
//         //print green there in results
//         }else if(/* if contained thing at index of attemptNum at guessNum != index of secretCue */) {
//         //print yellow
//         } else if(/*guessNum != secretCue*/) {
//             //print black
//         }
//     }else if (/*attemptnum contains != secretCue */) {
//             //print black
//         }
//    if (attemptNum >= board.length) {
//     //print msgL   
//      msgL.innerHTML = "Start new game";

//    }
// }

/*
if new game is clicked
    clear results
    clear attempt num
    clear guess num
    set board to all 0s
    make new random number
*/

/*
if clear attempt is clicked
    clear gusss num
    set attemptnum array to 0s
*/
