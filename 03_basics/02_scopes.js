// let a=10
// const b=20
// var c=30
var c = 300;
if(true){
  let a=10
  const b=20
  var c=30
}
var c= 400

//console.log(a); -> a is not defined
//console.log(b); -> b is not defined
// console.log(c); //op-400

// ***** nested function 

function one(){
  const username ="aditya"

  function two(){
    const website = "Youtube"
    //console.log(username);
  }
  //console.log(website);
  two()
}

one()

if(true){
  const username ="hitesh"
  if(username === "hitesh"){
    //const website ="youtube"
    //console.log(username + website); - aditya youtube
  }
 // console.log(website); -> website is not defined
}
//console.log(username); -> user name is not defined

//************ interesting *********
//console.log(addone(5)); -> we can declear first before using the function if we are not storing function in variable
function addone(num){
  return num+1;
}
//addTwo(5); -> it give error because function are stored in variable
const addTwo = function(num){
  return num+2;
}
// console.log(addTwo(8)); // correct

// addthree(7);
// console.log(ans);
let ans=function addthree(num){
console.log(num+6);
}
console.log(ans);