let randomNumber = parseInt(Math.random()*100+1);

let submit = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.resultParas');

let p = document.createElement('p');


let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
 if(isNaN(guess)){
   alert ('Please enter a valid number')
 } else if (guess < 1){
   alert ('Please enter a number more than 1')
  } else if (guess > 100){
    alert ('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if (numGuess===11){
      displayGuess(guess)
      displayMessage(`Game over. Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
 }
 

function checkGuess(guess){
if (guess === randomNumber){
  displayMessage(`You guessed it right`)
  endGame();
}else if (guess < randomNumber){
  displayMessage(`Number is too low`);
}else if (guess > randomNumber){
  displayMessage(`Number is too high`);
 }
}

function displayGuess(guess){
  userInput.value ='';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
