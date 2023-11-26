function one(){
    const username = "chiku"

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website); // shows an error "scope error"

    two()
}

one()

if(true){
    const username = "chiku"
    if(username === 'chiku'){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website); // scope error
}

console.log(username); // scope error


// +++++++++++++++++++++++++++++++++++++++++++++++++interesting ++++++++++++++++++++++++++++++++++++++++++++
// 1)
console.log(addOne(5));
function addOne(num){
    return num + 1
}



// 2)
addTwo(5) 
const addTwo = function(num){
    return num + 2
}