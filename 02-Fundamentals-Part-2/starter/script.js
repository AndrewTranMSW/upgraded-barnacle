//Using strict mode to write secure code. Makes it easier for developers to avoid accidental errors.
'use strict';

// let hasDriversLicense = false;
// const passedTest = true;

// if (passedTest) {
//     hasDriversLicense = true;
//     console.log(hasDriversLicense);
// }

// if (hasDriversLicense === true) {
//     console.log('I can drive :D!')
// } else {
//     console.log("I cant drive")
// }

//Functions!!
    // A function is a piece of code that we can reuse over and over again. It can hold multiple lines of code

// function logger() {
//     console.log("My name is Andrew");
// };
    
    //Calling the function--You can use this over and over and over and over and over and over
// logger();
// logger();
// logger();

//Placing parameters inside your function. Represents the input data of your function
// function fruitProcessor(apples, oranges, mangoes) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges. We also have ${mangoes} mangoes.`;
//     //We can return any value from the function, in this case, we are returning the const juice.
//     return juice;
// };

// const appleJuice = fruitProcessor(69, 32, 2);
// console.log(appleJuice);

// //We can reuse this function again:
// const appleOrangeJuice = fruitProcessor(34, 35, 2);
// console.log(appleOrangeJuice);

//Function declarations vs. expressions

    //Function declaration
// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// };

// const ninetyOne = calcAge1(1991);
// console.log(ninetyOne);

    //Function expression. This is a function without a name--in contrast to the earlier example which has a function with a name.
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// };

// const ninetyFour = calcAge2(1994);
// console.log(ninetyOne, ninetyFour);

//Difference between declarations and expressions
    //We can call declarations before they are defined in the code. You can call the declaration in a line of code above the actual function declaration is defined. This is made possible d/t 'hoisting'.
    //Which of the two should you use? It's a matter of personal preference. Function expressions require you to be more structured though. 

//Exercise:

    //1) Functions

    //Write a function declaration called 'describeCountry' which takes three parameters:
    // function returns a string with this format: 'Finland has 6 million people and its
    // 'country', 'population' and 'capitalCity'. Based on this input, the
    // capital city is Helsinki'
// function describeCountry(country, population, capitalCity){
//     return(`${country} has ${population} people and it's capital city is ${capitalCity}`)
// };
    //Call this function 3 times with input data for 3 different countries. Store the returned values in 3 different variables and console log.
// const finland = console.log(describeCountry("Finland", 6000000, "Helsinki"));
// const usa = console.log(describeCountry("USA", 330000000, "Washington DC"));
// const vietnam = console.log(describeCountry("Vietnam", 97000000, "Saigon"));

    //The world population is 7.9 billion people. Create a function declaration called 'percentageOfWorld1'

// function percentageOfWorld1(population){
//     return((population / 7900000000)*100);
// };

// const finlandPop = console.log("Finland has " +percentageOfWorld1(6000000)+ " percent of the world's population.");
// const usaPop = console.log("USA has "+ percentageOfWorld1(330000000)+ " percent of the world's population.");
// const vietnamPop = console.log("Vietnam has "+ percentageOfWorld1(97000000)+ " percent of the world's population.");

    //Create a function expression which does the exact same thing, called 'percentageOfWorld2'

// const percentageOfWorld2 = function(population){
//     return((population / 7900000000)*100);
// };

// const finlandPop = console.log("Finland has " +percentageOfWorld2(6000000)+ " percent of the world's population.");
// const usaPop = console.log("USA has "+ percentageOfWorld2(330000000)+ " percent of the world's population.");
// const vietnamPop = console.log("Vietnam has "+ percentageOfWorld2(97000000)+ " percent of the world's population.");

//Arrow Functions! () => {}
    //A special form of function expression that is shorter and faster to write.

    //Here is a regular function expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// };

    //In arrow function form:
    //This doesn't require a 'return' keyword

// const calcAge3 = birthYear => 2022 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

    //How many years a person has left until retirement.
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years. Hopefully.`
// };

// console.log(yearsUntilRetirement(1991, 'Andrew'));
// console.log(yearsUntilRetirement(1991, 'Phavy'));

    //Exercise
    //Recreate the last assignment, but create an arrow function called percentageOfWorld3

// const percentageOfWorld3 = (population) => {
//     return((population / 7900000000)*100);
// };

// const finlandPop = console.log("Finland has " +percentageOfWorld3(6000000)+ " percent of the world's population.");
// const usaPop = console.log("USA has "+ percentageOfWorld3(330000000)+ " percent of the world's population.");
// const vietnamPop = console.log("Vietnam has "+ percentageOfWorld3(97000000)+ " percent of the world's population.");

    //Functions calling other functions

// function cutFruitPieces(fruit){
//     return fruit * 4;
// };


// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     console.log(applePieces);
//     const orangePieces = cutFruitPieces(oranges);
//     console.log(orangePieces);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3));

    // Exercise: Create a function called 'describePopulation'. Use the function type you like the most.
    // The function takes in two parameters: country and population

// const describePopulation = (country, population) => {
//     const percentage = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people and this is about ${percentage}% of the world.`;
//     console.log(description)
// };

// const percentageOfWorld1 = (population) => {
//     return((population / 7900)*100);
// };

// describePopulation("Vietnam", 97);
// describePopulation("USA", 330);
// describePopulation("Finland", 60);

// console.log("=============================================================================");

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired!`);
//         return -1;
//     }
// };

// console.log(yearsUntilRetirement(1991, 'Andrew'));
// console.log(yearsUntilRetirement(1955, 'Khoa'));

//Coding Challenge #1

// Two teams: Dolphins and Koalas

// Each team competes 3 times, and then the avg of the 3 scores is calculated

// A team wins if it has at least DOUBLE the average score of the other team, otherwise, no team wins.

    //calculates the average of each team's 3 scores
// const calcAverage = (a, b, c) => {
// return (a + b + c)/(3);
// };
//     //confirms whether or not this function is working
// console.log(calcAverage(3, 4, 5));
//     //takes the avg score of each team as parameters
// const checkWinner = () => {
// if (dolphinsAverage >= (koalaAverage *2)) {
//     console.log(`Dolphins win with an average score of ${dolphinsAverage} and they scored twice or more than twice as much! The average score of the Koalas is ${koalaAverage}.`);
// } else if (koalaAverage >= (dolphinsAverage * 2)) {
//     console.log(`Koalas win with an average score of ${koalaAverage} and they scored twice or more than twice as much! The average score of the Dolphins is ${dolphinsAverage}.`)
// } else {
//     console.log(`There is no winner in this because no team scored double the score of another.`)
// };
// };

//     //Test data 1
// // let dolphinsAverage = calcAverage(44, 23, 71);
// // let koalaAverage = calcAverage(65, 54, 49);
// // console.log(dolphinsAverage, koalaAverage);
//     //Test data 2
// const dolphinsAverage = calcAverage(85, 54, 41);
// const koalaAverage = calcAverage(23, 34, 27);
// console.log(dolphinsAverage, koalaAverage);
//     // Calling the checkWinner function
// checkWinner();

//ARRAYS

    //This isn't DRY
// const friendOne = "Ted";
// const friendTwo = "David";
// const friendThree = "Andrew";

//     //This is WET fam
// const allTheHomies = ["Ted", "David", "Andrew", "An"];
// console.log(allTheHomies);
// console.log("=============================================================================");

// const yearsExample = new Array(1991, 1992, 1993, 1994);

// console.log(allTheHomies[2]);
// console.log(allTheHomies[0]);
// console.log(allTheHomies[allTheHomies.length-1]);

//     //We can mutate the array. This changes the array by replacing a value with another value.
// allTheHomies[2] = 'Monica';
//     //This will replace Andrew with Monica.
// console.log(allTheHomies);

//     //Arrays can hold different types of data
// const andrew = ["Andrew", "Tran", 2022-1991, "developer", allTheHomies];
// console.log(andrew)

// // Exercise
// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
//     //this will be NaN because years is an array
// console.log(calcAge(years));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
//     //You can also store function executions in an array as well.
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//Arrays Exercise
    //Create an array containing 4 population values of 4 countries of your choice.
    // You may use the values you have been using previously. Store this array into a
    // variable called 'populations'
// const populations = [10, 1441, 332, 83];
// console.log(populations.length >= 4 ? true : false);
    // Create an array called 'percentages' containing the percentages of the
    // world population for these 4 population values. Use the function
    // 'percentageOfWorld1' that you created earlier to compute the 4
    // percentage values

// const percentageOfWorld1 = (populations) => {
//     return((populations / 7900)*100);
// };

// const percentages = [
// percentageOfWorld1(populations[0]),
// percentageOfWorld1(populations[1]), 
// percentageOfWorld1(populations[2]), 
// percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

//Basic Array Operations (Methods)

const allTheHomies = ["Ted", "Andrew", "David", "An"];

    //push is a method(also a function) that will add to the END of array
allTheHomies.push('Cody');
    //Cody will be added to the end.
console.log(allTheHomies);

    //unshift is a method(also a function) that will add to the BEGINNING of an array
allTheHomies.unshift('Jay');
    //Jay will be added to the beginning.
console.log(allTheHomies);

    //pop will remove remove from the END of an array
allTheHomies.pop(2);
    //Cody will be deleted
console.log(allTheHomies);

    //shift is a method that will remove from the BEGINNING of an array
allTheHomies.shift();
    //Jay will be deleted
console.log(allTheHomies);

    //indexOf will show us the place in the array where an element is.
    //this should return '2'.
console.log(allTheHomies.indexOf("David"));

    //includes will provide a boolean of whether or not the element exists in the array. This tests with strict equality (===)
    //returns true
console.log(allTheHomies.includes("David"));
    //returns false
console.log(allTheHomies.includes("Dan"));
    //this would be similar to:
if (allTheHomies.includes("David")) {
    console.log("You have a friend named David");
} else {
    console.log("You don't have a friend named David");
};

//Coding challenge #2
