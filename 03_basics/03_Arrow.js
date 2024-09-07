// this is use to refer the current context

const user={
  username:"hitesh",
  price:999,

  welcomeMessage: function (){
    console.log(`${this.username} , welcome to website`);
    console.log(this);
    
  }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage();
//console.log(this);

// browser have window object

// function chai (){
//   let username="Aditya"
// //console.log(this.username); -> we cant use this . in function

// }
//chai()

// const chai =function(){
//   let username="hitesh"
//   console.log(this.username)
// }
// const chai =function()  {
//   let username="hitesh"
//   console.log(this)
// }


//****************** arrow function  */
// const chai =() => {
//   let username="hitesh"
//   console.log(this)
// }

// chai() -> empty


// const addTwo=(num1,num2){
//   return num1+num2 -explicit return 
// }

// console.log(addTwo(3,6));

//const addTwo(num1,num2)=> num1+num2 =inflicit return
// const addTwo=(num1,num2)=> (num1+num2) 

//console.log(addTwo(3,6));

const addTwo = (num1,num2) => ({username:"Aditya"})//-we have to use () when we want to pass a object in function

console.log(addTwo(3,4));