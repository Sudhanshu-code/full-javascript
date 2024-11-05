const randomNum = parseInt(Math.random() * 100 + 1);

const form = document.querySelector("form");
const previousGuesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const msg = document.querySelector(".lowOrHi");
const restart = document.querySelector("#restart");

const previousGuessesArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = parseInt(document.querySelector("#guessField").value);

  if (input > randomNum) {
    previousGuessesArray.push(input);
    document.querySelector("#guessField").value = "";
    msg.innerHTML = "entered Number is big";
  } else if (input < randomNum) {
    document.querySelector("#guessField").value = "";
    previousGuessesArray.push(input);
    msg.innerHTML = "Enter number is less";
  } else {
    msg.innerHTML = `you gussed it right: ${randomNum} | Click on restart to play again `;
    setInterval(() => {
      window.location.reload(true);
    }, 10000);
  }

  previousGuesses.innerHTML = previousGuessesArray;
  lastResult.innerHTML = lastResult.innerHTML - 1;

  if (lastResult.innerHTML == 0) {
    msg.innerHTML = `Game Over ! Restart | Number was ${randomNum}`;
    document.querySelector("#guessField").setAttribute("disabled", "");
  }
});

restart.addEventListener("click", () => {
  window.location.reload(true);
});

//optimised Way

// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector("#subt");
// const userInput = document.querySelector("#guessField");
// const guessSlot = document.querySelector(".guesses");
// const remaining = document.querySelector(".lastResult");
// const lowOrHi = document.querySelector(".lowOrHi");
// const startOver = document.querySelector(".resultParas");

// const p = document.createElement("p");

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener("click", function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert("PLease enter a valid number");
//   } else if (guess < 1) {
//     alert("PLease enter a number more than 1");
//   } else if (guess > 100) {
//     alert("PLease enter a  number less than 100");
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = "";
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = "";
//   userInput.setAttribute("disabled", "");
//   p.classList.add("button");
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// }

// function newGame() {
//   const newGameButton = document.querySelector("#newGame");
//   newGameButton.addEventListener("click", function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = "";
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute("disabled");
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }
