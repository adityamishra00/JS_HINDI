 function setUser(username){
  this.username=username;
 }

 function createUser(username,email,password){

  setUser.call(this,username);// we have to use call and this here to pass contest in new function

  this.email=email;
  this.password=password;
 }
 const chai=new createUser('chai','chai@ygyg','123')
 console.log(chai);
 