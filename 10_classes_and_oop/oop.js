const user ={
  username:'hitesh',
  loginCount:8,
  signedIn:true
}

console.log(user.username);


function User(username,loginCount,isLoggedIn){
  this.username=username;
  this.loginCount=loginCount;
  this.isLoggedIn=isLoggedIn
  this.greeting=function(){
    console.log(`welcome ${this.username}`);
    
  }
  return this;
}
// new is use to give new interface
const userOne= new User('aditya',12,true);
console.log(userOne);
