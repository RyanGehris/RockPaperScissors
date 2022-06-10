//Rock Paper Scissors Game
//function 'computerPlay' to randomly generate computer input
function computerPlay() {
    //3 potential selections stored in an array
    const selections = new Array('rock', 'paper', 'scissors');
    //randomly select one of 3 choices from the array
    const computerSelection = selections[Math.floor(Math.random() * 3)];
    return computerSelection;
}

//prompt player to choose rock, paper or scissors
function playerPlay() {
    const playerSelection = prompt('Rock, paper, scissors SHOOT!!!\nChoose your fighter...');
    //convert playerSelection to lower case
    const lowerCasePlayerSelection = playerSelection.toLowerCase();
    //confirm that the lowerCasePLayerSelection is one of the three options. I would prefer to have less code and combine the if and else if statements into if (lowerCasePlayerSelection === 'rock' || 'paper' || 'scissors'), but I cannot get it to work
    if (lowerCasePlayerSelection === 'rock') {
        return lowerCasePlayerSelection;
    } else if (lowerCasePlayerSelection === 'paper') {
        return lowerCasePlayerSelection;
    } else if (lowerCasePlayerSelection === 'scissors') {
        return lowerCasePlayerSelection;
    //I would like this to bring you straight back to the original prompt after the alert, but cannot figure it out
    } else {
        alert('TRY AGAIN: rock, paper, or scissors?');
    }
}
    
//Play a single round of rock paper scissors using the two parameters computerSelection and playerSelection
function playRound(playerSelection, computerSelection) {   
    if (playerSelection === computerSelection) {
        //console.log('It\'s a tie! Play again.');
        return 'tie'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        //console.log('You lose! Paper beats Rock.');
        return 'loss'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        //console.log('You win! Rock beats scissors.');
        return 'win'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        //console.log('You win! Paper beats rock.');
        return 'win'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        //console.log('You lose! Scissors beats paper.');
        return 'loss'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        //console.log('You win! Scissors beats paper.');
        return 'win'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        //console.log('You lose! Rock beats scissors.'); 
        return 'loss'
    }
}

//call on playerPlay function to set the variable for playerSelection
//const playerSelection = playerPlay();
//log detailed player choice
//console.log('Player chose: ' + playerSelection);
//call on computerPlayfunction to randomly generate a variable for computerSelection
//const computerSelection = computerPlay();
//log detailed computer choice
//console.log('Computer chose: ' + computerSelection)
//initiate function with the two variables that were just set
//console.log(playRound(playerSelection, computerSelection));

function game(length) {
    let playerScore = 0
    let computerScore = 0
    for (i = 1; i <= length; i++) {
        const resultOfRound = playRound(playerPlay(), computerPlay()); 
        if (resultOfRound === 'win') {
            console.log('you win');
            playerScore = playerScore + 1;
        } else if (resultOfRound === 'loss') {
            console.log('computer wins');
            computerScore = computerScore + 1;
        } else if (resultOfRound === "tie") {
            console.log('tie');
        } 
    console.log("Round " + i + ':' + '\nPlayer: ' + playerScore + ' ' + '\nComputer: ' + computerScore);
    }
    let finalScore = (playerScore > computerScore) ? 'YOU WIN' : (playerScore < computerScore) ? 'YOU LOSE' : 'TIE Game....';
    console.log(finalScore);
}

(game(5));



    