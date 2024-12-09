class User {
    constructor( email, password ) {
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value.toUpperCase();
    }


    get password(){
        return `${this._password}raj`;
    }
    set password(value){
        this._password = value.toUpperCase()
}
}

let Raj = new User("raj@gmail.com", "sdf");
// console.log(Raj);
console.log(Raj.email);



// getter and setter using property               old style

function User2(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value.toUpperCase();
        }
    });

    Object.defineProperty(this, "password", {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value.toUpperCase();
        }
    });
}

let danish = new User2( "danish@gmail.com", "346ksr");
console.log(danish.password);



// Object base property

let User3 = {
    _email: "abdule@gmail.com",
    _password: "jfdg458b",


    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value.toUpperCase();
    },

    get password() {
        return this._password.toUpperCase();
    },
    set password(value) {
        this._password = value.toUpperCase();
    }
}

let abdul = Object.create(User3);
console.log(abdul.email);

