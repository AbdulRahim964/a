let user = {
    username: "Abdul Rahim",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }
}

/* user.welcomeMessage()
user.username = "Raj"
user.welcomeMessage() */

// console.log(this);


/* function name(){
    username: "ARK"
    // console.log(this);
    console.log(this.username);
    
}

name() */



// ********************* Arrow function ********************************************

/* function chai(){
    username: "ARK"
    console.log(this.username);    
}

chai () */

/* let chai = () => {
    username: "ARK"
    console.log(this.username);    
} */


/* let addTwo = (num1, num2) => {
     return num1 + num2
} */

// let addTwo = (num1, num2) =>  num1 + num2
// let addTwo = (num1, num2) =>  (num1 + num2)
let addTwo = (num1, num2) =>  ({username: "Mohan"})

console.log(addTwo(3, 4));






                //    Immediately Invoked Function Expressions    (IIFE)


(function chai (){                 // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {                      // unamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Mir");

