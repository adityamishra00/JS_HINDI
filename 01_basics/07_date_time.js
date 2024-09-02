// Dates

let myDate =new Date()

//console.log(myDate.toString());
//op-Mon Sep 02 2024 10:50:22 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toDateString());
//op-Mon Sep 02 2024

//console.log(myDate.toISOString());
//op-2024-09-02T10:50:22.292Z

// console.log(myDate.toJSON());
//op- 2024-09-02T10:53:17.756Z

// console.log(myDate.toLocaleDateString());
//op-9/2/2024

// console.log(myDate.toLocaleString());
//op-9/2/2024, 10:50:22 AM

// console.log(myDate.toTimeString);
//op-[Function: toTimeString]

// console.log(myDate);
//op-2024-09-02T10:50:22.292Z

//console.log(typeof myDate); op-object

//let myCReateDate =new Date(2003,1,23);
//let myCReateDate=new Date(2023 ,0 ,23 ,5, 3)
let myCReateDate=new Date("20023-01-14")
//console.log(myCReateDate.toLocaleString());

let myTimeStamp=Date.now()

//console.log(myTimeStamp);
// console.log(myCReateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
  weekday:"long",
})