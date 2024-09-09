// if

const isUserloggedIn =true;
if(isUserloggedIn){
//
}
else{
  //
}
//<,>,<=,>=,==,!=,===,!==

// const bal=300
// if(bal>100)console.log("wow"),
// console.log("nice");
// if we use, we can use multiple line


//  const one=true;
// const two=true
// if(one&&two){//&& use
//   console.log("Allow")
// }


const month=3
switch (month) {
  case 1:
    console.log("jan")
    break;
  case 2:
    console.log("feb")
    break;
  case 3:
    console.log("mar")
    break;
  case 4:
    console.log("apr")
    break;

  default:
    break;
}
// falsy value

//false, 0, -0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false," ",[],{},function(){}

//false==0 op-true
//false=='' op-true
//0=='' op-true

// nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10
//val1=null??10
val1=undefined??15

console.log(val1);

//terniary Operaator

//condition ? true : false

const iceprice =100
iceprice>=60?console.log("yes"):console.log("no");

