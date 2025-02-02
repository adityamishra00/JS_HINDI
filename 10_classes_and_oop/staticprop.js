class user{
  constructor(username){
this.username=username;
}

logMe(){
  console.log(`username:${this.username}`);
  
}

static creatId(){
  return `123`
}
}

const aditya = new user('aditya')
//console.log(aditya.creatId());


class Teacher extends user{
  constructor(username,email){
    super(username)
    this.email=email
  }
}

const iphone = new Teacher('iphone','iphone@mail')
iphone.creatId();
