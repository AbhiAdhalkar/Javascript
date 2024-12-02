const accountID = 12345
let mail = "abhishek@gmail.com"
let abhi
var name = "abhishek"
city = "nashik"

// accountID = 2 //not allowed
// prefer not to use var beacause of issue in block scope and functional scope
mail = "abhi@mail.com"
name = "shravan"
city = "mumbai"
console.log(accountID);
console.table([accountID,mail,name,city,abhi])
