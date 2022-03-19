





function computerPlay() {
    let which = ['rock', 'paper', 'scissors']
    let hand = which[Math.floor(Math.random() * which.length)]
    return hand;
}

function haveAGo(playerChoice) {
  
    let computerChoice = computerPlay();
    document.getElementById('roc').style.display = 'none';
    document.getElementById('pap').style.display = 'none';
    document.getElementById('scis').style.display = 'none';


    
   
  if (playerChoice === 'rock' && computerChoice === 'scissors') {
       show('scissors');
       document.getElementById('result2').innerHTML = 'Rock wins!';
       
   }
  else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    show('scissors');
    document.getElementById('result2').innerHTML = 'Scissors wins!';
  
  }
  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    show('paper');
    document.getElementById('result2').innerHTML = 'Scissors wins!';
  }
  else if (playerChoice === 'rock' && computerChoice === 'paper') {
    show('paper');
    document.getElementById('result2').innerHTML = 'Paper wins!';
   
  }
  else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    show('rock');
    document.getElementById('result2').innerHTML = 'rock wins!';
     
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
    show('rock');
    document.getElementById('result2').innerHTML = 'Paper wins!';
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

