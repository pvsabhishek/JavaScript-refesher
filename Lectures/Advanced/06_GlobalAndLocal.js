// global scope for log1
let a = 10
const b = 20
var c = 30
obj = {abhi:'name'}

if(true){
    // local scope for log2
    let a = 10
    const b = 20
    var c = 30
    obj1 = { chiku : 'name'}

    // log2
    console.log(a);
    console.log(b);
    console.log(c);   
    console.log(obj); // obj is globe scope
    console.log(obj1); // obj1 is local scope
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// log1
console.log(a);
console.log(b);
console.log(c);