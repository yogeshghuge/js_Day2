
// Singleton
// constructor pasun ja banto to singleton asto

// Object.create
const mySym = Symbol("mykey1");

// Object literals

const jsUser={
    name: "Yogesh",
    "full name":"Yogesh Ghuge",
    age: 25,
    [mySym]:"mykey1",
    location: "Pune",
    email: "yogesh@gmail.com",
    isLoggedIn: false,
    lostLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym); // undefined

jsUser.email = "Yogesh@chatgpt.com"
//Object.freeze(jsUser); // freeze object
jsUser.email="yogesh@google.com"
//console.log(jsUser);

jsUser.greeting =function(){

    console.log("Hello World");

}
jsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}
 console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

