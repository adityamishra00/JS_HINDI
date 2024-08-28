//primitive 

// 7 types : String,Boolean ,Number ,BigInt, null,Undefined,Symbol

 const score =100
 const scoreValue=100.3


 const isLoggedIn =false
 const outsideTemp= null

 let userEmail;

 const id=Symbol('123')
 const anotherId=Symbol('123');

//console.log(id === anotherId); op=false;

const arr=["ram","raju","kalu"];
let myOj={
  name:"hitesh",
  age:22,
}
const myFunction=function(){
  //console.log("Hello World");
}
myFunction();

//console.log(typeof myFunction);


//const igNumer =5547656754675475n

//Reference (Non primitive)

//Array ,Ojects,Functions

//************************

//stack (Primitive) , Heap(Non-Primitive)

let myYoutubeName="hiteshchoudharydotcom"

let anotherName=myYoutubeName
anotherName="aditya"

//console.log(myYoutubeName);
//console.log(anotherName);
let userOne ={
  email:"user@gmail.com",
  upi:"user@ybl"
}

let userTwo = userOne
userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);