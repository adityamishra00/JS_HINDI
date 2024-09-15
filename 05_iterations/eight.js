 const arr=[1,2,3]
 const myNum= arr.reduce(function(acc,currval){
  //console.log(`acc: ${acc} and currval: ${currval}`)
return acc+currval;
 },0)// 0 is using to start from 

 //console.log(myNum);
 

 const shoppingCard=[
  {
    itemname:"js",
    price:59999
  },
  {
    itemname:"java",
    price:89879
  },
  {
    itemname:"computer science",
    price:599
  },
  
 ]

 const ans=shoppingCard.reduce(function(acc,item){
  return acc+item.price
 },0)
 console.log(ans);
 console.log(ans);