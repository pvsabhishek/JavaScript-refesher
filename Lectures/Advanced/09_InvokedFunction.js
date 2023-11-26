// Immediately Invoked Function Expressions (IIFE)

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();
// chai()

// unnamed IIFE
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('chiku')