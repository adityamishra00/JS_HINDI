//singleton -when we use constructor
//object.create

const mySym = Symbol("key1")

// object literals
const JsUser ={
  name:"Hitesh",
  "full name": " aditya mishra",
  [mySym]:"myname",
  age:18,
  location:"jaipur",
  email:"aditya@gamil.com",
  isloggedIn:false,
  LastLoginDays: ["Monday","Saturday"]
}
//console.log(JsUser.LastLoginDays)

//console.log(JsUser["email"]) - it is use to asses variable from the Object.

//console.log(JsUser."full name")   // we can use jsuser[email] because email is a string we cant asses like that.

//console.log(JsUser[mySym]);

//JsUser.email="asitya@google.com" -> we can modify element like that.

//console.log(JsUser.email)

//Object.freeze(JsUser) -> it is use to freeze the object we cant modify the element of object.

JsUser.email="ram@gmail.com"

//console.log(JsUser.email);

JsUser.gr = function(){
  console.log("hello js user");
}
JsUser.greetingTwo = function(){
  console.log(`hello js user,${this.name}`);
}
// use to refer any element

console.log(JsUser.gr())
console.log(JsUser.greetingTwo())