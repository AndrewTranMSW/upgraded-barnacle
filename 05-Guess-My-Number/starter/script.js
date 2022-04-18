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

const number = Math.random();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number 😒';
  }
});
