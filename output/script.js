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
// Explicitly declare
let a;
a = "rokib";
let b;
b = 20;
let c;
c = false;
// array
let numbers = [];
let names = [];
names.push("rokib");
numbers.push(10);
let mixed = [];
mixed.push(10);
mixed.push("hello");
console.log(numbers, names, mixed);
// for variable
let myVar;
myVar = 10;
myVar = "Rokib";
console.log(myVar);
// object
let Myobj;
Myobj = {
    name: "rokib",
    age: 21,
    isFunny: true,
};
console.log(Myobj);
let MyObj2 = {
    name: "Rokib",
    age: 25,
};
console.log(MyObj2);
let myObj3;
myObj3 = {
    name: "rokib",
    age: 21,
    isSmart: true,
};
console.log(myObj3);
// array is an object too
let arrObj;
arrObj = [10, 20, 30];
// Dynamic / Any type
let first;
first = 10;
first = "Hello";
let myArrOfAnny = [];
myArrOfAnny.push("hello");
myArrOfAnny.push(96);
myArrOfAnny.push(false);
let firstObject;
firstObject = {
    name: "Rakib",
    age: 22,
};
// function type
let myfun;
myfun = () => {
    //   console.log("Hello");
};
const myFun = (a, b, c) => {
    //   console.log(`Hello ${a} ${b} and ${c} ${d}`);
    return a + b + c;
};
const result = myFun("Hello", "Bangladesh", 20);
console.log(result);
