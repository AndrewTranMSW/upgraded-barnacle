'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!? ✨';

// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number!? ✨')
// );

// //changes the value of the numbers
// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 69;
// //changes the value of the input field
// document.querySelector('.guess').value = 22;
// console.log((document.querySelector('.guess').value = 22));

console.log('Ex 72');
// const number = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent =
//       'Not a valid number choice 😒';
//   }
// });

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 69;
// console.log((document.querySelector('.guess').value = 23));

console.log('Ex 74 & 76 Coding Challenge');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hiScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    //When there isn't a correct input
    // document.querySelector('.message').textContent = 'Please enter a number 😒';
    displayMessage('Please enter a number 😒');
    document.querySelector('body').style.backgroundColor = 'purple';
  } else if (guess === secretNumber) {
    //When the correct number was chosen
    // document.querySelector('.message').textContent =
    //   "Ayo, that's the correct number 🎉";
    displayMessage("Ayo, that's the correct number 🎉");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    score++;
    document.querySelector('.score').textContent = score;
    //Keeps track of the hiscore and checks it each time this function runs. Stores it in the .highscore class
    if (score > hiScore) {
      hiScore = score;
      document.querySelector('.highscore').textContent = hiScore;
    }
  } else if (guess !== secretNumber) {
    //Checks for the guess being too high or too low w/ ternary
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High 🪁' : 'Too Low 🍑';
      displayMessage(guess > secretNumber ? 'Too High 🪁' : 'Too Low 🍑');
      document.querySelector('body').style.backgroundColor = 'brown';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost! 🤢');
      document.querySelector('body').style.backgroundColor = 'pink';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Select the element with the 'again' class and attach an event listener for a click.
//Once clicked, restore initial values of the score and number variables.
//Restore the initial conditions of the message, number, score and guess input field
//Restore the original background color to #222 and number width of 15rem.

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
