                                                                            // For loop

/* for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("5 is the best number");
  }
    console.log(index);
} */


/* let myHeroes = ["Ironman", "Captain America", "Hulk", "Dr Srange", "Spiderman", "Antman", "Deadpool"]
console.log(myHeroes.length);
for (let index = 0; index < myHeroes.length; index++) {
    const element = myHeroes[index];
    console.log(element);
} */


                                                                   // Break and Continue

/* for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("5 is the best number");
    break;
  }
    console.log(index);
} */

/* for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("5 is the best number");
    continue;
  }
    console.log(index);
} */


                                                          // While and Do while loop

                                                                          // While loop
/* let index = 1;                        
while (index <= 10) {
    console.log(index);
    index++;
} */


/* let myHeroes = ["Ironman", "Captain America", "Hulk", "Dr Srange", "Spiderman", "Antman", "Deadpool"]
let arr = 0
 while (arr < myHeroes.length) {
    console.log(myHeroes[arr]);
    arr++;
} */


                                                           //   Do while loop
/* let index = 10;
do {
    console.log(index);
    index++;
} while (index <= 10); */



                          // Array and Object secfic loop

                            // loops for Array
                                                              // For of loop

 let myHeroes = ["Ironman", "Captain America", "Hulk", "Dr Srange", "Spiderman", "Antman", "Deadpool"]
for (let name of myHeroes) {
  //  console.log(name);
}


let greetings = "Hello world!";
for (let greet of greetings) {
   // console.log(greet);
}


                                                              // Map

let map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("FR", "France");
map.set("IN", "India");

// console.log(map);


for (let [key, value] of map) {
   // console.log(key, "=", value);
}


                                    //loop for Object

let myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift" 
}

for (let key in myObject) {
    // console.log(myObject[key]);
  //  console.log(`${key} shortcut: ${myObject[key]}`);
}

                                   // ArraY in forin loop
/* let programming = ["js", "py", "cpp", "rb", "java"]
for (let key in programming) {
    console.log(`${programming[key]}`);
} */


                                 // Array in for each loop

 let programming = ["js", "py", "cpp", "rb", "java"]

 /* programming.forEach( function (val){
    console.log(val);
}); */

/* programming.forEach( (val) => {
    console.log(val);
}); */


/* function printMe(item) {
    console.log(item);
}
programming.forEach( printMe ); */

/* programming.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
}) */



                                      // Objects in array 

let myProgramming = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "c"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

myProgramming.forEach( (val) => {
    console.log(val.languageName);
})






