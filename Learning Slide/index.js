let number = 10;

switch (number) {
  case number < 10:
    console.log("less value and incorrect");
    break;
  case number > 10:
    console.log("more value and incorrect");
    break;
  case number === 10:
    console.log("not strictly correct");
    break;
  default:
    console.log("the answer you want is not here");
}

console.log(10 === 10);

if (number == "10") {
  console.log("not strictly correct");
}

let isRaining = !true;

// isRaining ? alert('yes, it\'s raining') : alert('it\'s not raining')

let newNumber = 5

newNumber > 10 ? console.log(`${newNumber} is larger`) : console.log(`${newNumber} is smaller`)

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree)

let today = new Date().getTime()  /* this returns the milliseconds since January 1, 1970  */
console.log(today);

let now = new Date();
const year = now.getFullYear();
console.log(year);

const month = now.getMonth();
console.log(month);
