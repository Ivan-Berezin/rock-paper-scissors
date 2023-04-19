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
        scissors = Scissors
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

// Generate pc Choice



let pcScore = 0
let playerScore = 0
let rounds = 0

for (let rounds = 0; rounds < 5;) {

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

//Generate Player Choice



const playerChoice = prompt("Rock, Paper, or Scissors?:").toLowerCase()

console.log(playerChoice);

//Play round



    function compare(playerChoice, pcChoice) {
    if (playerChoice == "rock" && pcChoice == "Rock" || playerChoice == "paper" && pcChoice == "Paper" || playerChoice == "scissors" && pcChoice == "Scissors") { 
        console.log("It's a tie!");
        alert("It's a tie!");
        rounds++;
    } else if (playerChoice == "rock" && pcChoice == "Scissors" || playerChoice == "paper" && pcChoice == "Rock" || playerChoice == "scissors" && pcChoice == "Paper") {
        console.log(`You win! ${playerChoice} beats ${pcChoice}`);
        alert(`You win! ${playerChoice} beats ${pcChoice}`);
        rounds++;
        return(playerScore += 1);
    } else if (playerChoice == "rock" && pcChoice == "Paper" || playerChoice == "paper" && pcChoice == "Scissors" || playerChoice == "scissors" && pcChoice == "Rock") {
        console.log(`You lose! ${pcChoice} beats ${playerChoice}`);
        alert(`You lose! ${pcChoice} beats ${playerChoice}`);
        rounds++;
        return(pcScore += 1);
    } else {
       console.log("Error, wrong input. You must pick rock or paper or scissors.");
       alert("Error, wrong input. You must pick rock or paper or scissors.");
    }
}

compare(playerChoice,pcChoice);
console.log(playerScore);
console.log(pcScore);
console.log(rounds);

}

function gameWinner(playerScore, pcScore) {
    if (playerScore > pcScore) {
        alert(`Good job! You won the game!
        The score was ${playerScore} - ${pcScore}.
        Refresh the page to play again.`);
    }   else if (playerScore < pcScore) {
        alert(`Oh oh, you lost the game...
        The score was ${playerScore} - ${pcScore}.
        Refresh the page to play again.`);
    } else {
        alert(`Game's a tie! Score is ${playerScore} - ${pcScore}.
        Refresh the page to play again.`);
    }
}

gameWinner(playerScore, pcScore);

