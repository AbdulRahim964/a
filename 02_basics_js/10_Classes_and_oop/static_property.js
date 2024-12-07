class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username ${this.username}`);
    }

      static createId(){
        return `096584`;
    }
}

let Dastan = new User("Dastan");
// console.log(Dastan.createId());


class Teacher extends User {
    constructor(email, username) {
        super(username);
        this.email = email;        
    }
}

let Mir = new Teacher("mir@gmail.com", "Mir");
// console.log(Mir);
// Mir.logMe();
console.log(Mir.createId());