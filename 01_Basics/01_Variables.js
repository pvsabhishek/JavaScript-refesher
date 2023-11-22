const accountId = 144565
let accountEmail = "abhishek@google.com"
var accountPassword = "12345"
accountCity = "raipur"  // allowed but this is not way to declare variables

let accountState;


// accountId = 2  // not allowed

accountEmail = "ab@ab.google.com"
accountPassword = "121212121"
accountCity = "pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scene and functional scope.

*/

console.table([accountId, accountEmail, accountPassword, accountState, accountCity]);

