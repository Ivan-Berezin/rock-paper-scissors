/*
UI Interactive Rock Paper Scicssors

    - Get Player Input from buttons.
        - Add event Listener to each button.
        - When clicked, set player choice to chosen option.
    - Get PC input randomly.
    - Compare Inputs.
    - Update Score.
        - get score nodes.
        - modify score nodes.
    - Update Rounds.
        - get round node.
        - modify round node.
    - Get new player Input.
    - Get new pc input.
    - Repeat steps 3 4 and 5.
    - Repeat all 5 times total.


**/

const buttons = document.querySelectorAll("button");

const playerScoreDOM = document.querySelector("#P-Score-Num");
let playerScore = ~~playerScoreDOM;
console.log( ~~playerScoreDOM);
console.log( playerScore);

const pcScoreDOM = document.querySelector("#C-Score-Num");
let pcScore = ~~pcScoreDOM;

const roundsDOM = document.querySelector("#Round-Number");
let rounds = ~~roundsDOM;

const messageDOM = document.querySelector("#message");

let whoWon = "";

let playerChoice = "";
let pcChoice = "";

const newGameButton = document.querySelector('#new-game-button');
console.log(newGameButton);

function compare(playerChoice, pcChoice) {
    if (playerChoice == "rock" && pcChoice == "Rock" || playerChoice == "paper" && pcChoice == "Paper" || playerChoice == "scissors" && pcChoice == "Scissors") { 
        console.log("It's a tie!");
        rounds++;
        roundsDOM.textContent = rounds;
        whoWon = "tie";
        message(whoWon);
    } else if (playerChoice == "rock" && pcChoice == "Scissors" || playerChoice == "paper" && pcChoice == "Rock" || playerChoice == "scissors" && pcChoice == "Paper") {
        console.log(`You win! ${playerChoice} beats ${pcChoice}`);
        rounds++;
        roundsDOM.textContent = rounds;
        playerScore++
        playerScoreDOM.textContent = playerScore;
        whoWon = "player";
        message(whoWon);
        return;

    } else if (playerChoice == "rock" && pcChoice == "Paper" || playerChoice == "paper" && pcChoice == "Scissors" || playerChoice == "scissors" && pcChoice == "Rock") {
        console.log(`You lose! ${pcChoice} beats ${playerChoice}`);
        rounds++;
        roundsDOM.textContent = rounds;
        pcScore++
        pcScoreDOM.textContent = pcScore;
        whoWon = "computer";
        message(whoWon);
        return;
    }
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
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

function message(whoWon) {
    if (whoWon == "tie") {
        messageDOM.classList.remove("message");
        messageDOM.classList.remove("message-win");
        messageDOM.classList.remove("message-lose");
        messageDOM.classList.add("message-tie");
        messageDOM.textContent = "It's a tie!";
    } else if (whoWon == "player") {
        messageDOM.classList.remove("message");
        messageDOM.classList.remove("message-tie");
        messageDOM.classList.remove("message-lose");
        messageDOM.classList.add("message-win");
        messageDOM.textContent = `You win the round! ${playerChoice} beats ${pcChoice}`;
    } else if (whoWon == "computer") {
        messageDOM.classList.remove("message");
        messageDOM.classList.remove("message-tie");
        messageDOM.classList.remove("message-win");
        messageDOM.classList.add("message-lose");
        messageDOM.textContent = `You lose the round! ${pcChoice} beats ${playerChoice}`;
    }
}

for (choice of buttons) {
    choice.addEventListener('click', function(e) {
        while (pcScore < 5 && playerScore < 5) {
        playerChoice = this.id;
        getComputerChoice();
        compare(playerChoice, pcChoice);
        gameWinner(playerScore, pcScore);
        return;
    }
        return;
    })
}

newGameButton.addEventListener('click', () => resetGame());

function resetGame() {
    rounds = 0;
    roundsDOM.textContent = rounds;
    playerScore = 0;
    playerScoreDOM.textContent = playerScore;
    pcScore = 0;
    pcScoreDOM.textContent = pcScore;
    newGameButton.classList.add('new-game-button');
    messageDOM.classList.add('message');

};



function gameWinner(playerScore, pcScore) {
    if (playerScore == 5) {
        messageDOM.classList.remove("message");
        messageDOM.classList.remove("message-tie");
        messageDOM.classList.remove("message-lose");
        messageDOM.classList.add("message-win");
        messageDOM.textContent = `You win the game! First to 5! Press "New Game!" to play again`;
        newGameButton.classList.remove("new-game-button");
        
    }   else if (pcScore == 5) {
        messageDOM.classList.remove("message");
        messageDOM.classList.remove("message-tie");
        messageDOM.classList.remove("message-win");
        messageDOM.classList.add("message-lose");
        messageDOM.textContent = `You lose the game! Press "New Game!" to try again.`;
        newGameButton.classList.remove("new-game-button");
    }
}