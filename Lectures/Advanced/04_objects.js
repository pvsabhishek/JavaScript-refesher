// const tinderUser = new Object() // singleton
const tinderUser = {} // non singleton

tinderUser.id = '123abc'
tinderUser.name = 'samy'
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname:{
            firstname:'chiku',
            lastname:'don',
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj5 = {5:'a',6:'b'}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign({}, obj1,obj2,obj5)
console.log(obj4);

const obj6 = {...obj1,...obj2,...obj5}
console.log(obj6);

const users = [
    {
        id:1,
        user: 'h@gmail.com'
    },
    {
        id:2,
        user: 'a@gmail.com'
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

