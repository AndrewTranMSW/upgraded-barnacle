'use strict';

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1992);

const Andrew = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
};

Andrew.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = Andrew.calcAge;
matilda.calcAge();

const f = Andrew.calcAge;
f();
