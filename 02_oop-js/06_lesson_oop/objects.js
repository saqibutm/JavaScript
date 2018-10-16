<<<<<<< HEAD
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

userOne.login();
=======
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

userOne.login();
>>>>>>> 371cc931208052f76d490bbcacba063234844a10
userTwo.logout();