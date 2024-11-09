                                 //If

/* let tenperature = 41;

if (tenperature < 50) {
    console.log("less than 50");
} else {
    console.log("greater than 50");
} */


/*    let scoree = 200;
if (scoree > 100) {
    let power = "fly";
    console.log(`User power: ${scoree}`);
}   */

                            // If Shorthand 
// let balances = 1000;

// if (balances) console.log(`balances: ${balances}`);

                              // if else

/* if (balances < 500) {
    console.log("Less than 500");
} else if (balances < 750) {
    console.log("Less than 500");
} else if (balances < 700) {
    console.log("Less than 750");
} else if (balances < 900 ) {
    console.log("Less than 900");
} else {
    console.log("Less than 1200");
} */


/* let userloggedin = true;
let debitCard = true;

if (userloggedin && debitCard) {
    console.log("Allow to buy course");
} */


/* let loggedInFromGoogle = false;
let loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("Allow to log in");
} */


                           // Switch case

/* switch (key) {            //switch's syntex
    case value:
        
        break;

    default:
        break;
} */


/* let month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febury");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default: console.log("default case match");
        break;
} */


                        //  Truthy and falsy value
/* false value
 false, 0, -0, BigInt 0n, "", null, undefined, NaN */


/* Truthy value
"0", 'false', " ", [], {}, function() {} */



/* if (condition.length === 0)  {        //Checking empty array
    console.log("Arrsy is empty");
} */


/* let emptyObj = {};                            //Checking empty Object
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} */



                // Nullish Coalescing Operator (??)    
 
/* let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 30

console.log(val1); */


                      // Terniary Operator

// condition ? true : false       // Terniary syntex

let iceTeaPrice = 100;
iceTeaPrice >= 80  ? console.log("more than 80") : console.log("less than 80");
















