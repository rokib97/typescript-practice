"use strict";
//typescript can understand the declaration type and value
let myName = "rokib";
myName = "babu";
console.log(typeof myName);
// but when we don't assign anything it will not give us error
let country;
country = "Bangladesh";
country = 354;
console.log(country);
//type declaring
function multiply(a, b) {
    return a * b;
}
console.log(multiply(20, 10));
// array
const fruits = ["banana", "apple", "mango", 120];
fruits.push("guava"); // valid
fruits.push(120); // valid
// fruits.push(false); // not valid
// object
const person = {
    name: "rokib",
    age: 21,
    isSmart: true,
};
person.name = "Rokibul";
person.age = 25;
// person.Newage = 25; //not valid
