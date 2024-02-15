function cube(n) {
  return Math.pow(n, 2);
}
console.log(cube(3));

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (i, j) {
  console.log(i, j);
});

// Creating set from array

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); /* this returned an object of languages */

for (let language of setOfLanguages) {
  console.log(language);
}

// CLOSURE......
/* this basically means writing various functions inside a function */

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}

const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

// the innerFunction is returned by the outerFunction and that makes it a closure

/* The innerFunction can access the count variable from the outerFunction scope, even after the outerFunction has completed execution. */

let myName = "Kyle";

function printName() {
  console.log(myName);
}

myName = "Juliet";
printName();
myName = "Alexandra";
printName();

// ANOTHER EXAMPLE.....

function makeCounter() {
  let count = 0;

  return {
    increment: function () {
      return count++;
    },
    decrement: function () {
      return count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const myCounter = makeCounter();
console.log(myCounter.getCount()); // 0
console.log(myCounter.increment()); // 1
console.log(myCounter.decrement()); // 0
