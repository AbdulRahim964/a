//  Premitive data type
//  7 types : String, Number, Boolearn, null, undefined, Sombol, BigInt

/* const score = 100;
const scoreValue = 100.4;
const isloggedIn = false;
const outsideTemp = null;
let userEmail;

console.log(scoreValue); */


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const BigInt = 1234567890
console.log(BigInt);



//  Non Premitive data types
//  Array, Object, Functions

const heros = ["Shaktiman", "Naajraj", "Doga"]
 
let myObj = {
    name: "Abdul Rahim Khan",
    age: 22,
}

let myFunction= function () {
    console.log("hello world");
}

console.log(typeof 'myFunction');






























