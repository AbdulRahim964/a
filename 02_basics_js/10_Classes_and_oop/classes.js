class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptedPassword() {
        return `${this.password}abc`
}
changeUsername(){
    return `${this.username.toUpperCase()}`
}
}

let sahil = new User("sahil", "sahil@gmail.com", 5346558);
console.log(sahil.encryptedPassword());
console.log(sahil.changeUsername());


// Bhind the scean

function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptedPassword = function() {
    return this.password + "abc";
}

User2.prototype.changeUsername = function() {
    return this.username.toUpperCase();
}

let danish = new User("danish", "danish@gmail.com", 5346558);
console.log(danish.encryptedPassword());
console.log(danish.changeUsername());
