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

// Exercise

const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));
console.log(numNeighbors);

if (numNeighbors == 1) {
    console.log("Only 1 border!")
} else if(numNeighbors > 1) {
    console.log("More than 1 border")
} else {
    console.log("No borders")
};


