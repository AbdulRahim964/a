let user = {
   username: "Abdul Rahim Khan",
   loginCount: 9, 
   signedIn: true, 

   getUserDetails: function(){
    // console.log("Got user details from server");
    // console.log(`Username: ${user.username}`);
    // console.log(`Username: ${this.username}`);
       console.log(this);
            
   }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



function User (username, loginCount, isLoggedIn) {
   this.username = username;
   this.loginCount = loginCount;
   this.isLoggedIn = isLoggedIn;

   return this;
}
// console.log(User());



let userOne = new User("Abdul Rahim Khan", 12, true )
let userTwo = new User("Raj", 10, false )
console.log(userOne);
console.log(userTwo);











