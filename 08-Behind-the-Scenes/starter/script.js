'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(add(2, 3));
  }
  printAge();

  return age;
}

const firstName = 'Andrew';
calcAge(1991);
