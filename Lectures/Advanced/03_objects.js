// singleton
// objects.create

// object literals

const mySym = Symbol('key1')


const jsUser = {
    name: 'chiku',
    'full name': 'chiku don',
    [mySym]: 'key1',
    age: '18',
    location: 'london',
    email: 'chiku@google.com',
    isLoggedIn : false,
    lastLocationDays: ['Mondays', 'Saturdays']
}

console.log(jsUser.email);
console.log(jsUser['email']);
console.log(jsUser['full name']);
console.log(typeof jsUser.mySym); //string
console.log(jsUser[mySym]);

jsUser.email = "chiku@chatgpt.com"
// Object.freeze(jsUser)

jsUser.email = "chiku@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greetingTwo());

