let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let score1 = "33abc"
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber);
console.log(valueInNumber);  


// "33" >> 33
// "33abc" >> NaN --> not a number
// true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// ""=> false; "chiku" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);