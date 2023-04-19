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

let playerChoice = "";

for (choice of buttons) {
    choice.addEventListener('click', function(e) {
        playerChoice = this.id;
        getComputerChoice();
        compare(playerChoice, pcChoice);
        return;
    })
}


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



let pcChoice = "";
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