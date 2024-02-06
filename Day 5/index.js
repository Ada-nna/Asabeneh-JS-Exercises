// Exercise: Level 1

// Declare an empty array;
let array = [];

// Declare an array with more than 5 number of elements
let arrayOfElements = ["Germany", "Hungary", "Ireland", "Japan", "Kenya"];
// console.log(arrayOfElements);

// Get the first item, the middle item and the last item of the array
let firstItem = arrayOfElements[0];
console.log(firstItem);

let middleItem = arrayOfElements[Math.floor(arrayOfElements.length / 2)];
console.log(middleItem);

let lastItem = arrayOfElements[arrayOfElements.length - 1];
console.log(lastItem);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "me", false, undefined, {}];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);

// Print the first company, middle and last company
const firstCompany = itCompanies[0];
console.log(firstCompany);

const middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(middleCompany);

const lastCompany = itCompanies[itCompanies.length - 1];
console.log(lastCompany);

// Print out each company
console.log(itCompanies.slice());

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  const element = itCompanies[i];
  console.log(element.toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies} are big IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Apple")) {
  console.log("Apple");
} else {
  console.log("company is not found");
}

// Filter out companies which have more than one 'o' without the filter method
let companiesWithMoreO = [];
for (let j = 0; j < itCompanies.length; j++) {
  const newElement = itCompanies[j];
  if (newElement.includes("oo")) {
    companiesWithMoreO.push(newElement);
  }
}
console.log(companiesWithMoreO);

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7));

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
if (itCompanies.length % 2 === 0) {
  let middleElement = Math.floor(itCompanies.length / 2);
  console.log(itCompanies.splice(middleElement, 1));
}

// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies
itCompanies.length = 0;

// Exercise: Level 2

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let splittedText = text.split(" ");
console.log(splittedText);
console.log(splittedText.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
let newAdd = shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
let newAdd2 = shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
let removeHoney = shoppingCart.splice(4, 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'
let teaIndex = shoppingCart.indexOf("Tea");
console.log(teaIndex);

shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
  console.log(countries);
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
// If it does not exist add Sass to the array and print the array.

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise: Level 3

// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
let sortedArray = ages.sort((a, b) => a - b);
console.log(sortedArray);

let minAge = Math.min(...sortedArray);
console.log(minAge);

let maxAge = Math.max(...sortedArray);
console.log(maxAge);

// Find the median age(one middle item or two middle items divided by two)
let medianAge = sortedArray[Math.floor(sortedArray.length / 2)];
console.log(medianAge);

// Find the average age(all items divided by number of items)
let sum = sortedArray.reduce((a, b) => a + b, 0);
console.log(sum);
let averageAge = Math.floor(sum / sortedArray.length);
console.log(averageAge);

// Find the range of the ages(max minus min)
let ageRange = maxAge - minAge;
console.log(ageRange);

// Compare the value of (min - average) and (max - average), use abs() method
let compareAge = Math.abs(minAge - averageAge, maxAge - averageAge);
console.log(compareAge);

// 1.Slice the first ten countries from the countries array
let firstTen = countries.slice(0, 10);
console.log(firstTen);

// Find the middle country(ies) in the countries array
let middleCountry = countries[Math.floor(countries.length / 2)];
console.log(middleCountry);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
if (countries.length % 2 === 0) {
    console.log(countries.length % 2);
}else{
    console.log("one more country for the first half");
}
