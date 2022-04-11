
let playerScore = 0;
let computerScore = 0;



const rocky = document.querySelector('#rocky');
rocky.addEventListener('click', () => { 
    haveAGo('rock');
    clicked();
    revealPlayerChoice('rock');
    deletePlayerChoice('rock');
   

});

const papery = document.querySelector('#papery');
papery.addEventListener('click', () => {
    haveAGo('paper');
    clicked();
    
    revealPlayerChoice('paper');
    deletePlayerChoice('paper');
    
});


const scissory = document.querySelector('#scissory');
scissory.addEventListener('click', () => {
    haveAGo('scissors');
    clicked();
    
    revealPlayerChoice('scissors');
    deletePlayerChoice('scissors');
    
});

function show(choice) {
   
   switch (choice) {
     case 'rock': document.getElementById('roc').style.display = 'block';
     break;
     case 'paper': document.getElementById('pap').style.display = 'block';
     break;
     case 'scissors': document.getElementById('scis').style.display = 'block';
     break;
     
}

   
  }

  function revealPlayerChoice(choice) {
    switch (choice) {
     case 'rock': document.getElementById('playerRoc').style.display = 'block';
     break;
     case 'paper': document.getElementById('playerPap').style.display = 'block';
     break;
     case 'scissors': document.getElementById('playerScis').style.display = 'block';
     break;
     
    }
    
  }

  function animateWinner() {
       document.getElementById('playerscore').classList.add('animate__animated animate__bounce');
       document.getElementById('computerscore').classList.add('animate__animated animate__bounce');
       
    }

    function playSound(sound) {
      const playerPoint = new Audio('sounds/buttonPress.mp3');
      const computerPoint = new Audio('sounds/computerScore.mp3');
      const retry = new Audio('sounds/retry.mp3');
      const clickedRetry = new Audio('sounds/clickedRetry.mp3');
      const draw = new Audio('sounds/wrong.mp3')

      if (sound === 'playPoint') {
        playerPoint.play();
      }
      else if (sound === 'compPoint') {
        computerPoint.play();
      }

      else if (sound === 'retry') {
        retry.play();
      }

      else if (sound === 'draw') {
        draw.play();

      }

      else if (sound === 'retryClicked') {
        clickedRetry.play();
      }
    }





function playAgain(winner) {
    document.getElementById('invisible').classList.add('retry');
    const box = document.getElementById('invisible');
    box.removeAttribute('id');
    box.textContent = `${winner} Play again?`;
    playSound('retry');
    
    
}


function clicked() {
  document.getElementById('rocky').classList.add('clicked');
  document.getElementById('papery').classList.add('clicked');
  document.getElementById('scissory').classList.add('clicked');

  
  
}

deletePlayerChoice = (chose) => {

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
       document.getElementById('result2').innerHTML = 'Score!';
       document.getElementById('playerscore').innerHTML = playerScore += 1;
       playSound('playPoint');
       

    
       
   }
  else if (playerChoice === 'paper' && computerChoice === 'scissors') {
    show('scissors');
    document.getElementById('result2').innerHTML = 'Fail!';
    document.getElementById('computerscore').innerHTML = computerScore += 1;
    playSound('compPoint');
   
  }
  else if (playerChoice === 'scissors' && computerChoice === 'paper') {
    show('paper');
    document.getElementById('result2').innerHTML = 'Score!';
    document.getElementById('playerscore').innerHTML = playerScore += 1;
    playSound('playPoint')
  }
  else if (playerChoice === 'rock' && computerChoice === 'paper') {
    show('paper');
    document.getElementById('result2').innerHTML = 'Fail!';
    document.getElementById('computerscore').innerHTML = computerScore += 1;
    playSound('compPoint');
   
  }
  else if (playerChoice === 'scissors' && computerChoice === 'rock') {
    show('rock');
    document.getElementById('result2').innerHTML = 'Fail!';
    document.getElementById('computerscore').innerHTML = computerScore += 1;
    playSound('compPoint');
  }
  else if (playerChoice === 'paper' && computerChoice === 'rock') {
    show('rock');
    document.getElementById('result2').innerHTML = 'Score!';
    document.getElementById('playerscore').innerHTML = playerScore += 1;
    playSound('playPoint')
  }
  else if (playerChoice === 'rock' && computerChoice === 'rock'){
    show('rock');
    document.getElementById('result2').innerHTML = 'Draw';
    playSound('draw')
  }
  else if (playerChoice === 'paper' && computerChoice === 'paper') {
    show('paper');
    document.getElementById('result2').innerHTML = 'Draw';
    playSound('draw')
  }

 else if (playerChoice === 'scissors' && computerChoice === 'scissors') {
   show('scissors');
   document.getElementById('result2').innerHTML = 'Draw';
   playSound('draw')
}

}


