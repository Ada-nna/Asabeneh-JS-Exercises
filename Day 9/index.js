// Explain the difference between forEach, map, filter, and reduce.
// forEach = it only works with an array
// map = it modifies an array and returns a new array, leaving the old array unchanged.
// filter = it filters out items which meets the condition of an array and return a new array.
// reduce = it takes a call back function and returns a single value....
// A callback is a function which can be passed as parameter to other function.

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Use forEach to console.log each country in the countries array.
countries.forEach((a) => {
  console.log(a);
});

// Use forEach to console.log each name in the names array.
names.forEach((a) => {
  console.log(a);
});

// Use forEach to console.log each number in the numbers array.
numbers.forEach((a) => {
  console.log(a);
});

// Use map to create a new array by changing each country to uppercase in the countries array.
countries.map((a) => {
  console.log(a.toUpperCase());
});

// Use map to create an array of countries length from countries array.
countries.map((country) => {
  console.log(country.length);
});

// Use map to create a new array by changing each number to square in the numbers array

numbers.map((num) => {
  console.log(Math.pow(num, 2));
});

// Use map to change to each name to uppercase in the names array

names.map((n) => {
  console.log(n.toUpperCase());
});

// Use map to map the products array to its corresponding prices.

products.map((a) => {
  console.log(a);
});

// Use filter to filter out countries containing land.
const filterCountries = countries.filter((c) => {
  return c.includes("land");
});
console.log(filterCountries);

// Use filter to filter out countries having six character.

const sixChar = countries.filter((b) => {
  return b.length === 6;
});
console.log(sixChar);

// Use filter to filter out countries containing six letters and more in the country array.

const sixAndMore = countries.filter((n) => {
  return n.length >= 6;
});
console.log(sixAndMore);

// Use filter to filter out names start with 'E';
const startWithE = names.filter((e) => {
  return e.charAt(0) === "E";
});
console.log(startWithE);

// Use filter to filter out only prices with values.
const pricesWithValue = products.filter((p) => {
  return p.price !== " " && p.price !== "";
});
console.log(pricesWithValue);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// Use reduce to sum all the numbers in the numbers array.

const reduceSum = numbers.reduce((a, b) => {
  return a + b;
});
console.log(reduceSum);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const europeanCountries = countries.reduce((a, b, i) => {
  // return countries.length - 1
  if (i === countries.length - 1) {
    return a + "and " + b + " are north European countries";
  } else {
    return a + b + ", ";
  }
}, "");
console.log(europeanCountries);

// Explain the difference between some and every
// 👇👇👇
// some() works same as logical OR  - i.e. it checks if at least one element of the array meets the given condition for it to carry out it's operation
// WHILE
// every() works same as logical AND && - i.e. it checks if all the elements of the array meets the given condition for it to carry out it's operation

// Use some to check if some names' length greater than seven in names array
const useSome = names.some((i) => {
  return i.length > 7;
});
console.log(useSome);

// Use every to check if all the countries contain the word land
const useEvery = countries.every((i) => {
  return i.includes("land");
});
console.log(useEvery);

// Explain the difference between find and findIndex.
// find() - returns the first element that meets the given condition
// WHILE...
// findIndex() - returns the index of the element that meets the given condition

// Use find to find the first country containing only six letters in the countries array
const useFind = countries.find((i) => {
  return i.length === 6;
});
console.log(useFind);

// Use findIndex to find the position of the first country containing only six letters in the countries array
const useFindIndex = countries.findIndex((i) => {
  return i.length === 6;
});
console.log(useFindIndex);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const useFindIndNor = countries.findIndex((j) => {
  return j.includes("Norway");
});
console.log(useFindIndNor);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const useFindIndRuss = countries.findIndex((j) => {
  return j.includes("Russia");
});
console.log(useFindIndRuss);

//   Exercises: Level 2

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPrice = products
  .map((a) => a.price)
  .filter((a) => a !== "" && a !== " ")
  .reduce((a, b) => a + b);
console.log(totalPrice);

// Find the sum of price of products using only reduce reduce(callback))

const sumOfPriceX = products.reduce((a, b) => {
  if (b.price !== "" && b.price !== " ") {
    return a + parseFloat(b.price);
  } else {
    return "";
  }
}, 0);

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const categorizeCountries = countries.filter(
  (a) =>
    a.includes("land") ||
    a.includes("ia") ||
    a.includes("island") ||
    a.includes("stan")
);
console.log(categorizeCountries);

// 👋👋👋 Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
import { countriess } from "./countries.js";

function getFirstTenCountries() {
  const firstTen = countriess.map((a) => a.name);
  const sliceFirstTen = firstTen.slice(0, 10);
  console.log(sliceFirstTen);
}
getFirstTenCountries();

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  const lastTen = countriess.map((a) => a.name);
  const sliceLastTen = lastTen.slice(-10);
  const sortLastTenCountries = sliceLastTen.sort((a, b) => b.localeCompare(a));
  console.log(sortLastTenCountries);
}
getLastTenCountries();

// 👋👋👋 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// Exercises: Level 3

// Use the countries information, in the data folder. Sort countries by name, by capital, by population

function nameCapitalPop(a) {
  const byName = a.sort((a, b) => a.name.localeCompare(b.name));
  console.log("byName:", byName);

  const byCapital = a.sort((a, b) => a.capital.localeCompare(b.capital));
  console.log("byCapital:", byCapital);

  const byPopulation = a.sort((a, b) => a.population - b.population);
  console.log("byPopulation:", byPopulation);
}
nameCapitalPop(countriess);
