const user = {
    username: "chiku",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

function chai(){
    let username = 'chiku'
    // console.log(this.username);
}

chai()


const chai = function(){
    let username = 'chiku'
    // console.log(this.username);
}
chai()

const chai = () => {
    let username = "chiku"
    console.log(this);
}

chai()


// implicit
const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(3,4));

// exciplit
const addThree = (num1,num2) => num1 + num2

const addFour = (num1, num2) => ({username: 'hitesh'})

console.log(addTwo(3,4));

const myArray = [2,5,7,9,6]

// myArray.forEach()













