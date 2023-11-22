// Primitive Datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 564561615616156161511321213n


// Reference (Non Primitive)
// Array , Objects, Functions

const heros = ["iron man", "Batman", "Superman"]

let myObj = {
    name : 'abhishek',
    age: '22',
}

const myFun = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primitive), Heap Memory (Non-Primitive)

let myYouTubeName = "chiku.com"
let anotherName = myYouTubeName
anotherName = "chikudon"

console.log(anotherName);
console.log(myYouTubeName);


let userOne = {
    email : "user@google.com",
    upi : "chikudon@ybl"
}

let userTwo = userOne

userTwo.email = "chikudon@google.com"

console.log(userOne.email);
console.log(userTwo.email);