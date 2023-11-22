const name = "chiku"

const repoCount = 50
// console.log(name + repoCount + " Value ") --> old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // this interpolution, new way of string

const gameName = new String('chiku don')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = game.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Chiku    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chikudon.com/chiku%20don"
console.log(url.replace('%20','-'))
console.log(url.includes('chiku'));
console.log(gameName.split('-'));