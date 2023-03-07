console.log("HelloWorld");

/*
This script will play Rock Paper Scissors with the computer.

1. Start a game.
2. Get the Computers choice.
3. Get the Players choice. (Has to be case insensitive).
4. Return who won and why.
5. Repeat for five rounds and show the winner of the game.

The game needs to generate a random computer choice, it needs to let the user input his own choice (which has to be case insensitive), it has to tell you who won the round and why. Then it has to make you play four more times and whomever wins the most wins the game.

1. Start a game.
    Func play game.
2. Start a round.
    Func start round.
3. Get players choice.
    let playersChoice = Prompt
    Make it case insensitive
    let rock = Rock
        paper = Paper
        sicssors = Scissors
4. get pcs choice
    let pcChoice = randNum from 1-3.
    let 1 = Rock
        2 = Paper
        3 = Scissors
5. Make choices compete and display tie, win, lose, or error message.
    if (playersChoice == Rock && pcChoice == Rock || playersChoice == Paper && pcChoice == Paper || playerChoice == Scissors && pcChoice == Scissors) { tie } else if (playerChoice == Rock && pcChoice == Scissors || playerChoice == Paper && pcChoice == Rock || playerChoice == Scissors && pcChoice == Rock) {
        win
    } else if (playerChoice == Rock && pcChoice == Paper || playerChoice == Paper && pcChoice == Scissors || playerChoice == Scissors && pcChoice == Rock)
    { lose } else {
        Error, wrong input. You must pick rock or paper or scissors.
    }
6. Keep the score
    let scorePlayer = #wins;
    let scorePc = #wins;

7.Choose a winner
    let winner = ("")
    if (scorePlayer > scorePC) {
        winner = "Player"
    } else if (scorePlayer < scorePC) {
        winner = "PC"
    } else {
        winner = "Its a tie!"
    }

8. return winner
    return(winner)

EXTRA
9. Play again button.
0. Let the player choose a name.


**/



/*function getComputerChoice() {

let pcChoice = "";

    pcChoiceGenerator = Math.floor(Math.random() * 3) + 1;
     if (pcChoiceGenerator == 1) {
       pcChoice = "Rock";
    } else if (pcChoiceGenerator == 2) {
        pcChoice = "Paper";
    } else if (pcChoiceGenerator == 3) {
        pcChoice = "Scissors";
    } else {
        pcChoice ="Something went horribly wrong.";
    }
    console.log(pcChoice);
**/


const randNum = Math.floor(Math.random() * 3) + 1;
let pcChoice = "";

function getComputerChoice(randNum) {
     if (randNum == 1) {
       pcChoice = "Rock";
    } else if (randNum == 2) {
        pcChoice = "Paper";
    } else if (randNum == 3) {
        pcChoice = "Scissors";
    } else {
        pcChoice = "Something went horribly wrong.";
    }    

    return(pcChoice);
}
console.log(getComputerChoice(randNum))

console.log(pcChoice);

const playerChoice = prompt("Rock, Paper, or scissors?:").toLowerCase()

console.log(playerChoice);

let pcScore = "0"
let playerScore = "0"
let rounds = "0"


    function compare(playerChoice, pcChoice) {
    if (playerChoice == "rock" && pcChoice == "Rock" || playerChoice == "paper" && pcChoice == "Paper" || playerChoice == "scissors" && pcChoice == "Scissors") { 
        console.log("Tie");
        rounds++;
    } else if (playerChoice == "rock" && pcChoice == "Scissors" || playerChoice == "paper" && pcChoice == "Rock" || playerChoice == "scissors" && pcChoice == "Rock") {
        console.log(`PLayer wins, ${playerChoice} beats ${pcChoice}`);
        rounds++;
    } else if (playerChoice == "rock" && pcChoice == "Paper" || playerChoice == "paper" && pcChoice == "Scissors" || playerChoice == "scissors" && pcChoice == "Rock") { l
        console.log(`Computer wins, ${pcChoice} beats ${playerChoice}`);
        rounds++;
    } else {
       console.log("Error, wrong input. You must pick rock or paper or scissors.");
    }
}

console.log(compare(playerChoice,pcChoice))