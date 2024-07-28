let guessButton = document.getElementById('guessButton');
let randomNumber = Math.floor(Math.random() * 100 + 1);
let running = true;
let attempts = 0;
let currentDate = new Date().toJSON().slice(0,10);
let gameHistory = document.getElementsByClassName('game-history');
let recentGame = document.createElement('p');
recentGame.style.textAlign = 'center'
recentGame.style.fontFamily = 'Atkinson Hyperlegible", sans-serif'
recentGame.style.fontSize = '20px'
recentGame.style.color = '#2E236C'
recentGame.innerHTML = localStorage.getItem('gameHistory');
gameHistory[0].append(recentGame);
guessButton.addEventListener('click', () => {
    let guess = Number(document.getElementById('userValue').value);
    let gameText = document.getElementById('gameText');
    attempts++;
    console.log(attempts)
    if(attempts >= 5){
        stopGame();
    }

    if (guess < randomNumber) {
        gameText.innerHTML = 'Too Low!! Try Again 😬'
    }
    else if (guess > randomNumber) {
        gameText.innerHTML = 'Too High!! Try Again 🥲'
    }
    else {
        gameWon();
    }
    
});

function stopGame(){
    let gameContent = document.getElementsByClassName('game-content');
    let showNumber = document.createElement('p');
    gameContent[0].innerHTML = 'Game Over! You Wasted all the chances 🥲'
    showNumber.textContent = `The Number is ${randomNumber}. Game will start in 10 seconds!`
    gameContent[0].append(showNumber);
    gameContent[0].style.fontSize = '50px';
    gameHistory = `${currentDate} - Lost the Game`
    localStorage.setItem('gameHistory',gameHistory)
    setTimeout(function(){location.reload(true)}, 10000);
}

function gameWon(){
    gameText.innerHTML = 'Correct Guess !! You Won the Game 🎉. <br> Next Game in 10 Seconds </br>'
    let gameStepone =  document.getElementsByClassName('game-step-2');
    let gameSteptwo = document.getElementsByClassName('game-step-3');
    gameStepone[0].style.display ='none';
    gameSteptwo[0].style.display = 'none';
    gameHistory = `${currentDate} - Won the Game`
    localStorage.setItem('gameHistory',gameHistory)
    setTimeout(function(){location.reload(true)}, 10000);
}
