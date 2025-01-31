 // 1 

 const promiseOne= new Promise(function(resolve,reject){
  setTimeout(function(){
console.log('asyc task is completed');
resolve()
  },1000)
 })

 promiseOne.then(function(){
  console.log('promise consumed');
 })

 // 2

 new Promise(function(resolve,reject){
  setTimeout(function(){
console.log('Async task 2');
resolve()
  },1000)
 }).then(function(){
  console.log('Async 2 resolved');
 })


 // 3

 const promiseThree= new Promise(function(resolve,reject){
  setTimeout(function(){
resolve({username:'Aditya',email:'agfs@mail'})
  },1000)
 })

 promiseThree.then(function(user){
  console.log(user);
 })

// 4

 const promiseFour= new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false;
    if(!error){
      resolve({username:'Aditya',password:'123'})
    }else{
      reject('Error: something went wrong')
    }
  },1000)
 })

promiseFour
.then(function(user){
console.log(user);
//console.log(user.username);
return user.username //-  this is not possible
 })
 .then((username)=>{
console.log(username);
 })
 .catch(function(error){
console.log(error);
 })
 .finally(function(){
  console.log('the promise is either resolved or rejected');
  
 })

 // 5

 const promiseFive= new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false;
    if(!error){
      resolve({username:'javascript',password:'123'})
    }else{
      reject('Error: JS went wrong')
    }
  },1000)
 }) 

 async function consumePromiseFive(){
  try {
    const response = await promiseFive
  console.log(response);
  } catch (error) {
    console.log(error); 
  }
 }

 consumePromiseFive()
  
//  async function getall() {
//  try {
//   const response=await fetch('https://api.github.com/users/adityamishra00')
//   const data=await response.json();
//   console.log(data);
//  } catch (error) {
//   console.log(error);
  
//  }
//  }

//  getall()

 fetch('https://api.github.com/users/adityamishra00')
 .then((response)=>{
return response.json()
 })
 .then((data)=>{
console.log(data);
 })
 .catch((error)=>{
  console.log(error);
  
 })