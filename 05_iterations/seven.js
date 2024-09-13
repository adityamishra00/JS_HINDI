const MyNumber =[1,2,3,4,5,6,7,8]

//const newNums=MyNumber.map(  (num) => { return num+10});
// if we are using scope we have to return the output;
//const newNums=[];
// for(let i=0;i<MyNumber.length;i++){
// newNums[i]=MyNumber[i]+10;
// }

// both give same output;

const newNums =MyNumber
.map((num)=>num*10)
.map((num) => num+1)
.filter((num)=>num>=40);
console.log(newNums);

