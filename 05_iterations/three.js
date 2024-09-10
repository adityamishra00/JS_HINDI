// for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

// for(const num of arr){
// console.log(num);
// }


// const greetings="Hello world"
// for(const num of greetings){
// console.log(`Each char is ${num}`);

// }

//Maps

const map=new Map()
map.set('IN',"India")
//map.set('IN',"India")// map is use to store unique value;
map.set('USA',"United States Of America")
map.set('Fr',"France")
// console.log(map);

for(const key of map){
  //console.log(key);
}
// for loop to acces all value of map in array


for(const [key,value] of map){
  //console.log(key,':-',value);
}
// for loop to acces value and key seperate

const myObject ={
  'game':'NFS',
  'game':'Spiderman'
}

// for(const [key,value] of myObject){
//   console.log(key,':',value);
// }// it is not iterable in this type of for loop