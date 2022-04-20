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

console.log('Ex 74');

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number 😒';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      "Ayo, that's the correct number 🎉";
    score++;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high lol 🪁';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost da game bby';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low, sheesh 🍑';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You hella lost da game bby';
      document.querySelector('.score').textContent = 0;
    }
  }
});
