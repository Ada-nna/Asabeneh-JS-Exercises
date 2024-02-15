// Declare a function fullName and it print out your full name.
function fullName() {
  let firstName = "Cynthia ";
  let lastName = "Okafor";
  let fullNames = firstName.concat(lastName);
  console.log(fullNames);
}
fullName();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function famName(fName, lName) {
  return `${fName} ${lName}`;
}
console.log("Cynthia", "Okafor");

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(2, 3));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function rectangleArea(l, w) {
  return l * w;
}
console.log(rectangleArea(6, 7));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function rectanglePerimeter() {
  let length = 12;
  let width = 20;
  let perimeter = 2 * (length + width);
  console.log(perimeter);
}
rectanglePerimeter();

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism

function volumeOfRectPrism(c, d, e) {
  return c * d * e;
}
console.log(volumeOfRectPrism(2, 3, 4));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle() {
  const pi = 3.142;
  let r = 7;
  let area = (pi * r * r).toFixed(2);
  console.log(area);
}
areaOfCircle();

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle() {
  const pi = 3.142;
  let r = 7;
  let circumference = (2 * pi * r).toFixed(2);
  console.log(circumference);
}
circumOfCircle();

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density() {
  const mass = 75;
  let volume = 25;
  let totalDensity = Math.floor(mass / volume);
  console.log(totalDensity);
}
density();

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
// Write a function which calculates a speed of a moving object, speed.

function speed() {
  const distance = 7500;
  let timeTaken = 235;
  let totalSpeed = Math.floor(distance / timeTaken);
  console.log(totalSpeed);
}
speed();

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight() {
  const mass = 500;
  let gravity = 10;
  let totalWeight = Math.floor(mass / gravity);
  console.log(totalWeight);
}
weight();

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit() {
  let oC = 25;
  const oF = Math.floor(oC * (9 / 5) + 32);
  console.log(oF);
}
convertCelsiusToFahrenheit();

/* 
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

function BMI() {
  let newWeight = 700050;
  let newHeight = 55;
  let BMI = Math.floor(newWeight / Math.pow(newHeight, 2));
  console.log(BMI);

  if (BMI < 18.5) {
    console.log("Underweight");
  } else if (BMI === 18.5 || BMI <= 24.9) {
    console.log("Normal weight");
  } else if (BMI === 25 || BMI <= 29.9) {
    console.log("Overweight");
  } else if (BMI >= 30) {
    console.log("Obese");
  }
}
BMI();

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  switch (month) {
    case "December":
    case "January":
    case "February":
      return "Winter";
      break;
    case "March":
    case "April":
    case "May":
      return "Spring";
      break;
    case "June":
    case "July":
    case "August":
      return "Summer";
      break;
    case "September":
    case "October":
    case "November":
      return "Autumn";
      break;

    default:
      return "invalid month";
  }
}
console.log(checkSeason("January"));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(i, j, k) {
  if (i > j && i > k) {
    return i;
  } else if (j > i && j > k) {
    return j;
  } else if (k > i && k > j) {
    return k;
  }
}
console.log(findMax(33, 75, 54));

// Exercises: Level 2

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arrayValue) {
  for (let i = 0; i < arrayValue.length; i++) {
    const element = arrayValue[i];
    console.log(element);
  }
}

printArray(["a", "3", "2"]);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(date) {
  dateFormat = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  timeFormat = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  ourDate = new Date().toLocaleDateString([], dateFormat);
  //   console.log(ourDate);

  ourTime = new Date().toLocaleTimeString([], timeFormat);
  //   console.log(ourTime);

  console.log(`${ourDate} ${ourTime}`);
}
showDateTime();

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(p, q) {
  return [q, p];
}
console.log(swapValues(3, 4));

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(i, j, k) {
  return [k, j, i];
}
console.log(reverseArray(8, 9, 10));

// OR

function anotherReverseArray(arr) {
  let anotherReverseArray = [];
  for (let r = arr.length - 1; r >= 0; r--) {
    const elementt = arr[r];
    anotherReverseArray.push(elementt);
  }
  return anotherReverseArray;
}

console.log(anotherReverseArray([1, 2, 3, 4, 5, 6]));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(param) {
  return param.toUpperCase();
}
console.log(capitalizeArray("jane"));


// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let itemCart = ["rice", "peas", "carrot", "lettuce"];

function addItem(p) {
  itemCart.push(p);
  return itemCart
}
console.log(addItem("beef"));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let cartItem = ["rice", "peas", "carrot", "lettuce"];

function removeItem(a) {
   let replaceableItem = cartItem.indexOf("peas");
   return cartItem
}
