// const country = "United States";
// const continent = "North America";
// let population = 333000001;
// let denmarkPop = 33000000;
// let description = "Portugal is in Europe, and it's 11 million people speak Portuguese";

// console.log(country, continent, population);

// const isIsland = country;
// const language = "English";

// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(typeof country);
// console.log(typeof population);

// const now = 2037
// const ageAndrew = now - 1991;
// const ageMom = now - 1955
// console.log("My age is " + ageAndrew);
// console.log("Mom's age is " + ageMom);
// console.log(ageAndrew * 2, 2**3);

// const firstName = "Andrew";
// const lastName = "Tran";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; // logs 15
// console.log(x)
// x += 10; // x = x + 10 = 25
// console.log(x)
// x *= 4; // x= x * 4 = 100
// console.log(x)
// x++; // x= x + 1
// console.log(x)
// x--; //x = x - 1
// console.log(x)

// console.log(ageAndrew > ageMom);
// console.log(ageAndrew < ageMom);
// console.log("If the US population split in half, we would have " + population / 2);
// console.log("US population plus 1 is " + population++)
// console.log(population < denmarkPop);

// BMI is calculated by BMI = mass / height ** 2 = mass / (height * height).
// Mass needs to be in kg and height needs to be in meter
// Store Mark and John's weight and height in variables
// Calculate both their BMIs using the formula
// Create a Boolean variable called markHigherBMI containing info about whether Mark has a higher BMI than John.

// let markHeight = 1.69;
// let markWeight = 78;
// let johnHeight = 1.95;
// let johnWeight = 92;

// let markBMI = (markWeight / (markHeight ** 2));
// console.log(markBMI);
// let johnBMI = (johnWeight / (johnHeight ** 2));
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//     console.log("Mark's BMI is indeed higher than John's.");
// } else {
//     console.log("Marks BMI is indeed not higher than John");
// };

// let markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// -----------------------------------------------

// const firstName = "Andrew";
// const job = "student";
// const birthYear = 1991;
// const currentYear = 2021;

// const andrew = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
// console.log(andrew);
// //Template Literal
// const andrewNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
// console.log(andrewNew);

// console.log(`String
// with
// multiple
// lines`);

// // let description = "Portugal is in Europe, and it's 11 million people speak Portuguese";
// let description = `Portugal
// is
// in
// Europe,
// and 
// it's
// 11
// million
// people
// speak
// Portuguese`
// ----------------------------------------------

// const age = 19;
// const isOldEnough = age >= 16;
// console.log(isOldEnough);

// if(isOldEnough) {
//     console.log('Sarah can start driving ❤');
// } else {
//     console.log("Sarah can't start driving dude 😒")
// }

// const sarahAge = 10;
// const isOldEnough = sarahAge >= 21

// if (isOldEnough) {
//     console.log("Old enough to drink! Bottoms up")
// } else {
//     const yearsLeft = 21 - sarahAge;
//     console.log(`Sarah is too young, she'll need to wait another ${yearsLeft} years.`)
// };

//---------------------------------------------------------------
// const birthYear = 2021;
// let century;
// if (birthYear <= 2000) {
//     century = 20
// } else {
//     century = 21
// };
// console.log(century);

// let myCountryPop = 30;
// let portugalPop = 33000000;

// if (myCountryPop > portugalPop) {
//     console.log(`Portugal's population is less than my country's with a population of ${portugalPop} people, my country's population is ${myCountryPop} people.`)
// } else {
//     console.log(`Portugal's population is more than my country's population--holy shit! There are ${portugalPop} people living in Portugal. In my country, there are ${myCountryPop} people.`)
// }
//-----------------------------------------------------------------
// Section 2 Part 1 Coding Challenge
// let markHeight = 1.69;
// let markWeight = 78;
// let johnHeight = 1.95;
// let johnWeight = 92;

// let markBMI = (markWeight / (markHeight ** 2));
// console.log(markBMI);
// let johnBMI = (johnWeight / (johnHeight ** 2));
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI of ${markBMI} is higher than John's BMI of ${johnBMI}`);
// } else {
//     console.log(`John's BMI of ${johnBMI} is higher than Mark's BMI of ${markBMI}`);
// };

//Type Conversion is when we manually convert from one type to another
// const inputYear = "1991";
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);


//Type Coercion is when JS converts data types for us, JS converts this number into a string for us
// console.log('I am ' + 23 + ' years old.');

// console.log(5 + 6 + '4' + 9 - 4 - 2);
// Section 2 Part I: 21 - Truthy and Falsy Values
// JS only has 5 falsy values:
    // 0, '', undefined, null, Nan;

// const money = 0;
// if (money) {
//     console.log("Don't spend it all!")
// } else {
//     console.log("You should get a job lol.")
// }

// let height = 0;
// if (height) {
//     console.log('Height is defined')
// } else {
//     console.log('Height is NOT defined')
// };

// Section 2 Part I: 22 - Equality Operators

// const age = 18;
// if (age === 18) {
//     console.log(`This person is 18`)
// } else {
//     console.log(`This person is not 18`)
// }

// console.log('18' === 18);

// const favoriteNumber = Number(prompt("What's your favorite number?"));
// console.log(favoriteNumber);
// console.log(typeof favoriteNumber)

// if (favoriteNumber === 12) {
//     console.log('Cool, 12 is an amazing number')
//     alert("12 is cool!!!!")
// } else if (favoriteNumber !== 12) {
//     alert("You didn't pick 12, so you smell")
// };

// Exercise Coding Challenge 2

// const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));
// console.log(numNeighbors);

// if (numNeighbors === 1) {
//     alert("Only 1 border!")
// } else if(numNeighbors > 1) {
//     alert("More than 1 border")
// } else {
//     alert("No borders")
// };

// Boolean logic: the And, Or, and Not operators
// and: && -- both conditions need to be true for the result to be true
// or: || -- only one condition needs to be true for it to return true
// not: != -- makes a true value false and a false value true

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision){
//     console.log("Sarah is able to drive") 
// } else {
//     console.log("Someone else should drive")
// };

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sarah is able to drive") 
// } else {
//     console.log("Someone else should drive")
// };

// Exercise Coding Challenge 3
//Calculate the ave scores of each team.
//Compare the average scores to determine the winner--make sure there is a tie clause.
//This will log Dolphins as the winner

// const dolphinAvg = (96 + 108 + 89) / 3;
// const koalaAvg =  (88 + 91 + 110) / 3;
// console.log(dolphinAvg);
// console.log(koalaAvg);

// if (dolphinAvg > koalaAvg) {
//     console.log("Dolphins Win!🏆");
// } else if (koalaAvg > dolphinAvg){
//     console.log("Koalas Win!🏆");
// } else {
//     console.log("It's a tie!");
// };

// Bonus 1:
//Include a requirement for a minimum score of 100--a team ONLY wins if it has a higher score than the other team AND they scored at least 100.
//This will log Koalas as the winner

// const dolphinAvg = (97 + 112 + 101) / 3;
// const koalaAvg =  (109 + 95 + 123) / 3;
// const dolphinScored100 = dolphinAvg >= 100;
// const koalaScored100 = koalaAvg >= 100;
// console.log(dolphinAvg);
// console.log(koalaAvg);
// console.log(dolphinScored100);
// console.log(koalaScored100);

// if(dolphinAvg > koalaAvg && dolphinScored100){
//     console.log("Dolphins win!🏆");
// } else if (koalaAvg > dolphinAvg && koalaScored100){
//     console.log("Koalas win!🏆");
// } else if (dolphinAvg > koalaAvg && !dolphinScored100){
//     console.log("Dolphins scored higher than Koalas, but didn't score at least 100");
// } else if (koalaAvg > dolphinAvg && !koalaScored100){
//     console.log("Koalas scored higher than Dolphins, but didn't score at least 100");
// } else {
//     console.log("It was a tie");
// };

//Bonus 2:
//Minimum score also applies to a draw. A draw happens when both teams have the same score AND both have a score greater or equal to 100. Otherwise, there's no winner.
//This will log a tie

// const dolphinAvg = (97 + 112 + 101) / 3;
// const koalaAvg =  (109 + 95 + 106) / 3;
// const dolphinScored100 = dolphinAvg > 100;
// const koalaScored100 = koalaAvg > 100;
// console.log(dolphinAvg);
// console.log(koalaAvg);
// console.log(dolphinScored100);
// console.log(koalaScored100);

// if(dolphinAvg > koalaAvg && dolphinScored100){
//     console.log("Dolphins win!🏆")
// } else if (koalaAvg > dolphinAvg && koalaScored100){
//     console.log("Koalas win!🏆")
// } else if (dolphinAvg > koalaAvg && !dolphinScored100){
//     console.log("Dolphins scored higher than Koalas, but didn't score at least 100")
// } else if (koalaAvg > dolphinAvg && !koalaScored100){
//     console.log("Koalas scored higher than Dolphins, but didn't score at least 100")
// } else {
//     console.log("It was a tie")
// };

// The Switch Statement

// const day = prompt("what day is it?");

// switch(day) {
//     case 'monday': // day === 'monday'
//         console.log("Plan how to buy a GPU");
//         console.log("Go to the farmer's market");
//         break;
//     case 'tuesday':
//         console.log("Watch Finding Nemo");
//         console.log("Watch Shang-Chi");
//         break;
//     //this will execute for both wednesday and thursday because there's no break
//     case 'wednesday':
//     case 'thursday':
//         console.log("Pet my dogs");
//         break;
//     case 'friday':
//         console.log("Watch YouTube");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Do nothing");
//         break;
//     //Below is the edge-case
//     default:
//         console.log("Not a valid day") // basically like an else block
// }

//Try writing the switch statement as an if else statement.

// const day = prompt("What day is it?");

// if (day === "monday") {
//     console.log("it's monday");
// } else if (day === "tuesday") {
//     console.log("It's Tuesday");
// } else if ( day === "wednesday" || day === "thursday") {
//     console.log("It's either Wednesday or Thursday");
// } else if ( day === "friday") {
//     console.log("Issa Friday");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("It's the weekend--do nothing!"); 
// } else {
//     console.log("You didn't choose a valid day");
// };

//The switch statement isn't as widely used anymore but it has it's scenarios where it makes sense to use over the if else statement.

//Statements and Expressions
// Expression - A piece of code that produces a value. I.E. 3 + 4 = 7
// Numbers are also expressions
// Booleans are also expressions

// Statements are like a bigger piece of code that don't necessarily produce a value.
// Statements are like complete sentences whereas expressions are the words that make up the sentence.
// An If Else statement is an example of a statement. A switch case is also an example of a statement.

// Expressions would be placed in the statement to produce a value 
// The if statement is a statement, the 2 > 1 is an expression.
// if (2 > 1) {
//     console.log(true);
// }

// Conditional Operator
// Good for comparing two scenarios--pretty much an If Else statement

const age = 23;
const drink = age >= 18 ? "beer 🍻" : "juice 🧃";
// console.log(drink);

//Same as:

//This variable is defined outside but can be used inside this statement and available to the code blocks in the if else statement
// let drink2;
// if(age >= 18) {
//     drink2 = "I like to drink beer 🍻";
// } else {
//     drink2 = "I like to drink juice 🧃";
// }
// console.log(drink2);

//This can also be used in a template literal--will save you keystrokes!
console.log(`I like to drink ${age >= 18 ? "beer 🍻" : "juice 🧃"}`)

// Coding Challenge 4

// Steven wants to build a tip calculator 
    // Tip of 15% will be given if the bill is between $50 and $300.
    // Otherwise, the tip will be 20%

// Calculate the tip depending on the bill value
    // Create a variable 'tip'
    // DO NOT use an if else statement--use a ternary operator
    //Console.log:
        //Bill value
        //Tip
        //Bill + Tip
    //Test data: 275, 40, 430

let tip;
<<<<<<< HEAD
const bill = 275;
=======
const bill = 40;
>>>>>>> 5f8b2a9eb17f15620937bc4eb6a87330ff2485d9
const tipAmount = bill >= 50 && bill <= 300 ? (tip = (bill * 1.15) - (bill)) : (tip = (bill * 1.20) - (bill))
const total = tipAmount + bill;
console.log(`The bill value is ${bill}, the tip amount is ${tipAmount}, and the total is ${total}.`)

// JS releases and versions

    // ECMAscript is the standard, JS is the language
    //ES5 was released with lots of great features in 2009
    //ES6 was released in 2015 and was the biggest update to the language ever



