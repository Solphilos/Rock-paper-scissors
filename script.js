// function will randomly return 'rock', 'paper', or 'scissors' //

function computerPlay() {
    let which = ['rock', 'paper', 'scissors']
    let hand = which[Math.floor(Math.random() * which.length)]
    alert(hand);
}

computerPlay()