class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAMRE is ${this.username}`);
}
}


class Teacher extends User{
    constructor(username, password, email) {
        super(username);
        this.password = password;
        this.email = email;
    }
    
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

let chai = new Teacher("chai", "chai@teacher.com", 35647);

chai.addCourse()

let masalaChai = new User("masalaChai");
masalaChai.logMe();
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
