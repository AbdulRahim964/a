let myName = "Raj         ";
console.log(myName.length);



let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "Web Slinger",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.getSpiderPower}`);
    }
}

Object.prototype.Raj = function(){
    console.log(`Raj is present in all objects`);
}

Array.prototype.hayRaj = function(){
    console.log(`hayRaj says hellow`);
}

// heroPower.Raj()
myHeroes.Raj()
myHeroes.hayRaj();
heroPower.hayRaj()


                        // Inheritance


let User = {
    name: "John Doe",
    age: 30
}

let Teacher = {
    makeVideo: true
}

let TeachingSupport = {
    isAvailable: false
}

let TASupport = {
    makeAssignment: "js assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



                         // Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
   








