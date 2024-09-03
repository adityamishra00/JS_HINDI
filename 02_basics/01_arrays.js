// array
// in javascript we can change size of array and element may nbe of different types
const myArr = [2,4,5,6,7,8]
const myHeroes = ["ram","shayam"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr2[1]); op-2

// Array Methods

myArr.push(6);
myArr.push(7);
// myArr.pop();
//console.log(myArr);

//myArr.unshift(9);  add this element in the first
//myArr.shift() remove first element
//console.log(myArr);
//console.log(myArr.includes(9)); op-false
//console.log(myArr.indexOf(9)); op=-1

 //const newArr= myArr.join()  //- join isa use to combine its all element in string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice ,splice **********

 console.log("A", myArr);

 const myn1 = myArr.slice(1,3)

 console.log(myn1);
 console.log("B",myArr);

 const myn2 =myArr.splice(1,3);
 console.log("c",myArr);
 console.log(myn2);

