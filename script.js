

function computerPlay() {
    let which = ['rock', 'paper', 'scissors']
    let hand = which[Math.floor(Math.random() * which.length)]
    return hand;
}

function singleRound() {
    
    let playerChoice = prompt('Rock, paper or scissors?');
    alert(`you chose ${playerChoice}`);
    let computerChoice = computerPlay();
    alert(`computer chooses ${computerChoice}`);

  if (playerChoice === 'rock' && computerChoice === 'scissors') {
      alert('rock crushes scissors, you win!')
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
      alert('rock smashes scissors, you lose!');
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
      alert('paper...erm...covers rock? You win, I guess');
  }
  else {
      alert('its a tie, play again');
  }
}

function game() {
    for (i = 0; i < 5; i ++) {
        singleRound();
    }
}

game()