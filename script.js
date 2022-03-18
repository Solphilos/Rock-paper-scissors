





function computerPlay() {
    let which = ['rock', 'paper', 'scissors']
    let hand = which[Math.floor(Math.random() * which.length)]
    return hand;
}

function haveAGo(playerChoice) {
    
    
    alert(`you chose ${playerChoice}`);
    let computerChoice = computerPlay();
    alert(`computer chooses ${computerChoice}`);

  if (playerChoice === 'rock' && computerChoice === 'scissors') {
      alert('rock smashe s the shit out of scissors, you win!')
  }
  else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      alert('scissors cut paper, you lose!')
  }
  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      alert('scissors cut paper, you win!') 
  }
  else if (playerChoice === 'rock' && computerChoice === 'paper') {
      alert('paper...erm....covers rock...computer wins, I guess');
  }
  else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      alert('rock smashes  the shit out of scissors, you lose!');
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
      alert('paper...erm...covers rock? You win, I guess');
  }
  else {
      alert('its a tie, play again');
  }
}


