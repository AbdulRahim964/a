function SetUsername(username) {
    this.username = username;
    console.log("called");
    
}

function createUser(username, password, email) {
    
    SetUsername.call(this, username)
    
    this.email = email;
    this.password = password;
}

let Raj = new createUser("Rajan", "rajan@gmail.com", "123");

console.log(Raj);