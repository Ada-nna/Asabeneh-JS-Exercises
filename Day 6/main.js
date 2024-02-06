const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Iterate 0 to 10 using for loop, do the same using while and do while loop

// using the FOR loop..
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

for (let j = 0; j < webTechs.length; j++) {
  console.log(webTechs[j]);
}

for (let k = 0; k < mernStack.length; k++) {
  console.log(mernStack[k]);
}

// using the WHILE loop..
let x = 0;
while (x < countries.length) {
  console.log(countries[x]);
  x++;
}

let y = 0;
while (y < webTechs.length) {
  console.log(webTechs[y]);
  y++;
}

let z = 0;
while (z > mernStack) {
  console.log(mernStack[z]);
  z++;
}

// using the DO WHILE loop..
let e = 0;
do {
  console.log(countries[e]);
  e++;
} while (e < countries.length);

// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let m = countries.length - 1; m >= 0; m--) {
  const element = countries[m];
  console.log(element);
}

for (let n = webTechs.length - 1; n >= 0; n--) {
  const newElement = webTechs[n];
  console.log(newElement);
}

for (let o = mernStack.length - 1; o >= 0; o--) {
  const mernElement = mernStack[o];
  console.log(mernElement);
}

// using While loop....
let s = countries.length - 1;
while (s >= 0) {
  console.log(countries[s]);
  s--;
}

let t = webTechs.length - 1;
while (t >= 0) {
  console.log(webTechs[t]);
  t--;
}

let u = mernStack.length - 1;
while (u >= 0) {
  console.log(mernStack[u]);
  u--;
}

// Iterate 0 to n using for loop
let n = 5;
for (let p = 0; p <= n; p++) {
  console.log(p);
}

/*
Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

let h = "";
for (let v = 0; v <= 7; v++) {
  h += "#";
  console.log(h);
}

/*
Use loop to print the following pattern::
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/

for (let q = 0; q <= 10; q++) {
  console.log(`${q} * ${q} = ${q * q}`);
}

/*
Use loop to print the following pattern::
i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

for (let g = 0; g <= 10; g++) {
  console.log(`${g} ${g * g} ${g * g * g}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let w = 0; w <= 100; w++) {
  if (w % 2 === 0) {
    console.log(w);
  }
}

let num = 0;
for (let i = 0; i <= 100; i++) {
  num += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${num}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
for (let l = 0; l <= 100; l++) {
  if (l % 2 === 0) {
    evenSum += l;
  }
}
// console.log(evenSum);

let oddSum = 0;
for (let k = 0; k <= 100; k++) {
  if (k % 2 !== 0) {
    oddSum += k;
  }
}
// console.log(oddSum);
console.log(
  `The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`
);

// Develop a small script which generate array of 5 random numbers
let maxLength = 5;
let newNumber = [];

for (let u = 0; u < maxLength; u++) {
  newNumber.push(Math.floor(Math.random() * 10));
}
console.log(newNumber);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let lengthh = 5;
let uniqueRandomNumbers = new Set();
while (uniqueRandomNumbers.size < lengthh) {
  uniqueRandomNumbers.add(Math.floor(Math.random() * 5));
  console.log([...uniqueRandomNumbers]);
}

// Develop a small script which generate a six characters random id:
let numChar = "0123456789";
let letChar = "qwertyuioplkjhgfdaszxcvbnm";
let charCombination = numChar + letChar;
let charLength = 6;
let newRandomChar = "";

for (let ch = 0; ch < charLength; ch++) {
  newRandomChar += charCombination[Math.floor(Math.random() * charCombination.length)];
  console.log(newRandomChar);
}
