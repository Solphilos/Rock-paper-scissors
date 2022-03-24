
let playerScore = 0;
let computerScore = 0;


function playAgain(winner) {
    document.getElementById('invisible').classList.add('retry');
    const box = document.getElementById('invisible');
    box.removeAttribute('id');
    box.textContent = `${winner} Play again?`
    
    
}


function clicked() {
  document.getElementById('rocky').classList.add('clicked');
  document.getElementById('papery').classList.add('clicked');
  document.getElementById('scissory').classList.add('clicked');

  
  
}

removePlayerChoice = (chose) => {

  if (chose === 'rock') {
    document.getElementById('playerPap').style.display = 'none';
   document.getElementById('playerScis').style.display = 'none'; }
  else if (chose === 'paper') {
    document.getElementById('playerRoc').style.display = 'none';
    document.getElementById('playerScis').style.display = 'none';
  }
  else if (chose === 'scissors') {
    document.getElementById('playerRoc').style.display = 'none';
    document.getElementById('playerPap').style.display = 'none';
  }
}



newGame = () => { document.location.reload(true) }


function results() {
  if (playerScore === 10 && computerScore < 10) {
    playAgain('You win!');
  }
  else if (playerScore < 10 && computerScore === 10) {
     playAgain('You lose!');
      }
    }




function computerPlay() {
    let which = ['rock', 'paper', 'scissors']
    let hand = which[Math.floor(Math.random() * which.length)]
    return hand;
}


function haveAGo(playerChoice) {
     

    let computerChoice = computerPlay();     
    results();
    document.getElementById('roc').style.display = 'none';
    document.getElementById('pap').style.display = 'none';
    document.getElementById('scis').style.display = 'none';


    
   
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
       show('scissors');
       document.getElementById('result2').innerHTML = 'Rock beats scissors, you win!';
       document.getElementById('playerscore').innerHTML = playerScore += 1;

    
       
   }
  else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    show('scissors');
    document.getElementById('result2').innerHTML = 'Scissors cuts paper, you lose!';
    document.getElementById('computerscore').innerHTML = computerScore += 1;
  }
  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    show('paper');
    document.getElementById('result2').innerHTML = 'Scissors cuts paper, you win!';
    document.getElementById('playerscore').innerHTML = playerScore += 1;
  }
  else if (playerChoice === 'rock' && computerChoice === 'paper') {
    show('paper');
    document.getElementById('result2').innerHTML = 'Paper covers rock, you lose!';
    document.getElementById('computerscore').innerHTML = computerScore += 1;
   
  }
  else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    show('rock');
    document.getElementById('result2').innerHTML = 'Rock beats scissors, you lose!';
    document.getElementById('computerscore').innerHTML = computerScore += 1;
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
    show('rock');
    document.getElementById('result2').innerHTML = 'Paper covers rock, you win!';
    document.getElementById('playerscore').innerHTML = playerScore += 1;
  }
  else if (playerChoice === 'rock' && computerChoice === 'rock'){
    show('rock');
    document.getElementById('result2').innerHTML = 'It\'s a draw!';
  }
  else if (playerChoice === 'paper' && computerChoice === 'paper') {
    show('paper');
    document.getElementById('result2').innerHTML = 'It\'s a draw!';
  }

 else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
   show('scissors');
   document.getElementById('result2').innerHTML = 'It\'s a draw!';
}

}


