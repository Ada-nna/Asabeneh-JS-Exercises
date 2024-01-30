// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and
// use the typeof operator to check different data types.
let firstName = "Bimbs";
let lastName = "Adeoti";
let country = "Nigeria";
let city = "Lagos";
let age = 25;
let isMarried = false;
let year = 2024;

console.log(firstName, typeof firstName);
console.log(lastName, typeof lastName);
console.log(country, typeof country);
console.log(city, typeof city);
console.log(age, typeof age);
console.log(isMarried, typeof isMarried);
console.log(year, typeof year);

// // Check if type of '10' is equal to 10
let number = 10;
number === "10"
  ? console.log("they're equal")
  : console.log("they're different");

// Check if parseInt('9.8') is equal to 10
let integer = parseInt("9.8");
integer === 10
  ? console.log("they're equal")
  : console.log("they're not equal");



// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
let c = "hello world";
if (c) {
  console.log(c);
}

let one = 1;
if (one) {
  console.log(one);
}

let array = [];
if (array) {
  console.log(array);
}

// Write three JavaScript statement which provide falsy value.
let valueOne = 0;
if (valueOne) {
  console.log(valueOne);
}

let valueTwo = undefined;
if (valueTwo) {
  console.log(valueTwo);
}

let valueThree = null;
if (valueThree) {
  console.log(valueThree);
}


// Figure out the result of the following comparison expression first without using console.log().
// After you decide the result confirm it using console.log()
// 4 > 3
if (4 > 3) {
  console.log(true);
}
// 4 >= 3
if (4 >= 3) {
  console.log(true);
}
// 4 < 3
if (4 < 3) {
  console.log(true);
}
// 4 <= 3
if (4 <= 3) {
  console.log(true);
}
// 4 == 4
if (4 == 4) {
  console.log(true);
}
// 4 === 4
if (4 === 4) {
  console.log(true);
}
// 4 != 4
if (4 != 4) {
  console.log(true);
}
// 4 !== 4
if (4 !== 4) {
  console.log(true);
}
// 4 != '4'
if (4 != "4") {
  console.log(true);
}
// 4 == '4'
if (4 == "4") {
  console.log(true);
}
// 4 === '4'
if (4 === "4") {
  console.log(true);
}


// Find the length of python and jargon and make a falsy comparison statement.
let word1 = "python";
let word2 = "jargon";

console.log(word1.length);
console.log(word2.length);

if (word1.length !== word2.length) {
    console.log(true);
}


// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 4 > 3 && 10 < 12
if (4 > 3 && 10 < 12) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// 4 > 3 && 10 > 12
if (4 > 3 && 10 > 12) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// 4 > 3 || 10 < 12
if (4 > 3 || 10 < 12) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// 4 > 3 || 10 > 12
if (4 > 3 || 10 > 12) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// !(4 > 3)
if (!(4 > 3)) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// !(4 < 3)
if (!(4 < 3)) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// !(false)
if (!(false)) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// !(4 > 3 && 10 < 12)
if (!(4 > 3 && 10 < 12)) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// !(4 > 3 && 10 > 12)
if (!(4 > 3 && 10 > 12)) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// !(4 === '4')
if (!(4 === '4')) {
    console.log('correct');
} else{
    console.log('incorrect');
}

// There is no 'on' in both dragon and python
if (!(word1 && word2).includes('on')) {
    console.log('correct');
} else{
    console.log('incorrect');
}


// Use the Date object to do the following activities

// What is the year today?
let currentDate = new Date()
console.log(currentDate.getFullYear());

// What is the month today as a number?
console.log(currentDate.getMonth());

// What is the date today?
console.log(currentDate.getDate());

// What is the day today as a number?
console.log(currentDate.getDay());

// What is the hours now?
console.log(currentDate.getHours());

// What is the minutes now?
console.log(currentDate.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(currentDate.getTime());


// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let baseInput = prompt("Enter base");
let heightInput = prompt("Enter height");
let constHalf = 0.5;

triangleArea = constHalf * baseInput * heightInput;
console.log(`The area of the triangle is ${triangleArea}`);


// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt("Enter the value of side a");
let sideB = prompt("Enter the value of side b");
let sideC = prompt("Enter the value of side c");

let trianglePerimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`The perimeter of the triangle is ${trianglePerimeter}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("Enter the radius");
radius = parseFloat(radius);
let pi = 3.14;
let area = (pi * radius * radius).toFixed(2);
console.log(`The area of your circle is ${area}cm`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let rectLength = prompt("Enter length");
let rectWidth = prompt("Enter width")
let rectArea = rectLength * rectWidth;
console.log(`The area of your rectangle is ${rectArea}cm`);

// Perimeter
let rectPerimeter = 2 * (rectLength + rectWidth);
console.log(`The perimeter of your rectangle is ${rectPerimeter}cm`);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let numberOfHours = prompt("Enter hours");
let ratePerHour = prompt("Enter rate per hour");
let totalPay = numberOfHours * ratePerHour;
console.log(`The total pay for this employee is ${totalPay}`);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let userName = prompt("Enter your name");
if (userName.length > 7) {
  console.log("Your name is long");
}else{
  console.log("Your name is short");
}

// Compare your first name length and your family name length and you should get this output.
let yourFirstName = prompt("Enter your first name");
let yourLastName = prompt("Enter your last name");

if (firstName.length > lastName.length) {
  console.log(`Your first name, ${yourFirstName} is longer than your family name, ${yourLastName}`);
}else{
  console.log(`Your family's name, ${yourLastName} is longer than your first name, ${yourFirstName}`);
};

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myOwnAge = prompt("Enter your age");
let yourOwnAge = prompt("Enter your friend's age");
let ageDifference = parseFloat(myOwnAge) - parseFloat(yourOwnAge);

console.log(`I am ${ageDifference} years older than you`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let yearOfBirth = prompt("Enter actual age:");

if (yearOfBirth >= 18) {
  console.log(`You are ${yearOfBirth}. You are old enough to drive`);
}else{
  let noOfYearsToWait = 18 - parseFloat(yearOfBirth)
  console.log(`You are ${yearOfBirth}. You will be allowed to drive after ${noOfYearsToWait} years.
  `);
}

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume someone lives just hundred years
let numberOfYears = prompt("How old are you?");
let numberOfSecondsToLive = 31536000 * 100;
let userAgeSeconds = parseFloat(numberOfYears) * 31536000;
let secondsLeftToLive = numberOfSecondsToLive - userAgeSeconds;
console.log(`You are ${numberOfYears} years old. You've lived ${userAgeSeconds} seconds. You've got ${secondsLeftToLive} seconds left to live 😉😜`);


// Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
const now = new Date();
console.log(formatDateToYYYYMMDDHHMM(now));


// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
var date = new Date(0);
date.setMinutes(5); // specify value for SECONDS here
var timeString = date.toISOString().substring(11, 19);
console.log(timeString)
