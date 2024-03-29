// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
// 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let yearOfBirth = prompt("Enter actual age:");

if (yearOfBirth >= 18) {
  console.log(`You are old enough to drive`);
} else {
  let noOfYearsToWait = 18 - parseFloat(yearOfBirth);
  console.log(`You are left with ${noOfYearsToWait} to drive.`);
}

// Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you).Use prompt(“Enter your age:”) to get the age as input.

let myOwnAge = prompt("Enter your age:");
let yourOwnAge = prompt("Enter your age:");

if (myOwnAge > yourOwnAge) {
  console.log("I am older than you.");
} else if (yourOwnAge > myOwnAge) {
  let ageDifference = parseFloat(yourOwnAge) - parseFloat(myOwnAge);
  console.log(`You are ${ageDifference} years older than me.`);
}

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.

let a = 4;
let b = 3;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

// ......
a > b ? console.log(a) : console.log(b);

// Even numbers are divisible by 2 and the remainder is zero.
// How do you check, if a number is even or not using JavaScript?

let numCheck = prompt("Enter a number:");
parseFloat(numCheck) % 2 === 0
  ? console.log("Your number is an even number")
  : console.log("Your number is an odd number");

// Exercises: Level 2

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let studentScore = prompt("Enter a student score:");
let sScore = parseFloat(studentScore);

if (sScore >= 80 && sScore <= 100) {
  console.log(`Their score is ${studentScore} and their grade is A`);
} else if (sScore >= 70 && sScore <= 80) {
  console.log(`Their score is ${studentScore} and their grade is B`);
} else if (sScore >= 60 && sScore <= 69) {
  console.log(`Their score is ${studentScore} and their grade is C`);
} else if (sScore >= 50 && sScore <= 59) { 
  console.log(`Their score is ${studentScore} and their grade is D`);
} else if (sScore >= 0 && sScore <= 49) {
  console.log(`Their score is ${studentScore} and their grade is F`);
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let seasonInput = prompt("Enter any month of the year to check:");

if (
  seasonInput == "september" ||
  seasonInput == "october" ||
  seasonInput == "november"
) {
  console.log(`${seasonInput} is an Autumn season`);
} else if (
  seasonInput == "december" ||
  seasonInput == "january" ||
  seasonInput == "february"
) {
  console.log(`${seasonInput} is a Winter season`);
} else if (
  seasonInput == "march" ||
  seasonInput == "april" ||
  seasonInput == "may"
) {
  console.log(`${seasonInput} is a Spring season`);
} else if (
  seasonInput == "june" ||
  seasonInput == "july" ||
  seasonInput == "august"
) {
  console.log(`${seasonInput} is a Summer season`);
} else {
  console.log("invalid input");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

let dayType = prompt("What is the day today?");

if (dayType == "saturday" || dayType == "sunday") {
  console.log(`${dayType} is a weekend`);
} else if (
  dayType == "monday" ||
  dayType == "tuesday" ||
  dayType == "wednesday" ||
  dayType == "thursday" ||
  dayType == "friday"
) {
  console.log(`${dayType} is a working day`);
}

// Write a program which tells the number of days in a month.
let monthOfTheYear = prompt("Enter a month");

switch (monthOfTheYear) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${monthOfTheYear} has 31 days`);
    break;

  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${monthOfTheYear} has 30 days`);
    break;
  case "february":
    console.log(`${monthOfTheYear} has 28 or 29 days`);
    break;
  default:
    console.log("Entered value is an invalid month");
}

// Write a program which tells the number of days in a month, now consider leap year.
if (
  (monthOfTheYear % 4 === 0 && monthOfTheYear % 100 !== 0) ||
  monthOfTheYear % 400 === 0
) {
  console.log(`${monthOfTheYear} has 29 days`);
} else {
  console.log(`${monthOfTheYear} has 28 days`);
}
