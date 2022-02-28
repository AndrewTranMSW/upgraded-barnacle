// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;

// const calcAge = (birthYear) => 2022 - birth;

// console.log("hello yo");

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const temperatures2 = [1, 2, 4, 8, -7, -9, 0, 22, 28, 30, 31, 32];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//Problem 2: Function should now receive two arrays of temperatures.

//1) Understand the problem
//  - With 2 arrays, should we implement functionality twice? Nope--just merge the two arrays.

// 2) How do we merge two arrays?
//From Google -- array.prototype.concat();

// const joinedArr = temperatures.concat(temperatures2);
// console.log(joinedArr);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
