// console.log("H");
// console.log("I");
// console.log("P");
// console.log("J");
// console.log("G");
// console.log("F");

// ** function help to call same thing again and again

function sayMyNmae(){
  console.log("H");
console.log("I");
console.log("P");
console.log("J");
console.log("G");
console.log("F");
}
//sayMyName -> this is referance
//sayMyNmae(); -> this is declearation

// function addTwoNumber (number1,number2){
//   console.log(number1+number2);//parameter ****
// }
//addTwoNumbner(3,"9");//arguments ***

function addTwoNumbers(number1,number2){
  // let result=number1+number2;
  // return result;
  return number1+number2;

  //both the way are correct

}
//console.log(addTwoNumbers(3,5));
// const result=addTwoNumbers(3,5);
// console.log("result:",result);

function login(username){
  if(/*username===undefined*/ !username){
    console.log("please enter username");
    return;
  }
  return `${username} just logged in`
}

//console.log(login("Aditya"));

 function ans(...nums){
  return nums;
 }
//   console.log(2);
// console.log(ans(200,300,400));
// // rust (...name)

const  user = {
  username:"aditya",
  price:"199"
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);

const myNewArray  = [200,300,490]

function returnSecondValue(getArray){
  return getArray[2];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400]));