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

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degrees celsius:")),
//   };
//   console.log(measurement);
//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//Array manipulation practice
let numbers = [1, 2, 3, 4];
let colors = ["red", "orange", "yellow", "green", "blue", "violet"];
let trueFalse = [true, false, true, false, true];
let mixItUp = [1, "two", true, null];

// toString() converts array to string, separated by commas.
console.log(colors.toString());
//output = red,orange,yellow,green,blue,violet

// join() is similar to toString, but you can specify the separator in the parameter
console.log(colors.join("#"));
//output = red#orange#yellow#green#blue#violet

// concat() combines 2 arrays together, or adds more items to an array then returns a new array
let newArr = numbers.concat(colors);
console.log(newArr);
//output = [1, 2, 3, 4, 'red', 'orange', 'yellow', 'green', 'blue', 'violet']

//push() adds to end of the array and changes the original
let pushedArr = numbers.push(5, 6, 7);
console.log(numbers);
//output = [1, 2, 3, 4, 5, 6, 7]

//pop() removes the last item at the end of an array and returns it.
numbers.pop();
console.log(numbers);
//output = [1, 2, 3, 4, 5, 6]

//shift() removes the first item of an array and returns it
let fruits = ["apple", "banana", "orange"];
fruits.shift();
console.log(fruits);

//unshift() adds to the first item of the array and changes it
fruits.unshift("papaya", "mango");
console.log(fruits);
//output = ['papaya', 'mango', 'banana', 'orange']

//splice() changes an array by adding, removing, and inserting.
//array.splice(index[, deleteCount, element1, ..., elementN])
//index is the starting point for removing elements
//deleteCount is the number of elements to be deleted
//element1, ..., elementN is the element(s) to be added

//remove with splice
let dogBreeds = ["Lab", "Golden", "Pitbull", "Chihuahua", "Maltese"];
dogBreeds.splice(1, 3);
console.log(dogBreeds);
//output = ["Lab", "Maltese"];

//replace with splice
let hungrySentence = ["I", "Am", "So", "Hungry", "Today"];
console.log(hungrySentence);
hungrySentence.splice(0, 4, "We", "Are", "Somewhat", "Thirsty");
console.log(hungrySentence);

//add with splice
let kailhBox = ["Box Browns", "Box Whites", "Box Jades"];
kailhBox.splice(3, 0, "Box Navy");
console.log(kailhBox);

//slice() copies a part of an array and returns that copied part as a NEW array--it doesn't change the original.
//syntax: array.slice(start, end);
//best way to use slice() is to assign it to a new variable
let message = "congratulations";
const abbreviated = message.slice(0, 7) + "s!";
console.log(abbreviated);

//filter() creates a new array if the items of an array pass a certain condition
const numero = [1, -1, 2, 3, 69, 78];

//regular function
const normalFilter = numero.filter(function (value) {
  return value >= 1;
});
//output = [1, 2, 3, 69, 78]

//arrow function
const coolFilter = numero.filter((n) => n >= 1);

console.log(normalFilter, coolFilter);
//output = [1, 2, 3, 69, 78]
