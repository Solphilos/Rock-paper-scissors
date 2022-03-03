

function computerPlay() {
    let which = ['rock', 'paper', 'scissors']
    let hand = which[Math.floor(Math.random() * which.length)]
    return hand;
}

function singleRound(playerSelection, computerSelection) {
    
    let playerSelection = prompt('Rock, paper or scissors?');
    alert(`you chose ${playerChoice}`);
    let computerSelection = computerPlay();
    alert(`computer chooses ${computerChoice}`);

 
}
 
