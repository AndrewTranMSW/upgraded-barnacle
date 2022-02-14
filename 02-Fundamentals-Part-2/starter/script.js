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

//Arrow Functions! () => {}
    //A special form of function expression that is shorter and faster to write.

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};

//In arrow function form:

const calcAge3 = birthYear => 2022 = birthYear
