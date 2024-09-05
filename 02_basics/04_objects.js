 //const tinderUser = new Object() //-> singletone object
 const tinderUser={} //-> this is not singletone
 tinderUser.id="123abc"
 tinderUser.name="sanny"
 tinderUser.isLoggedIn= false
 //console.log(tinderUser);

 const regularUser ={
  email:"ram@gmail.com",
  fullname:{
usserfullname:{
  firstname:"hitesh",
  lastname:"mishra"
}
  }
 }
 //console.log(regularUser.fullname.usserfullname.firstname);
 //we can asses element like this
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
 //const obj3={obj1,obj2};
 //const obj3= Object.assign({},obj1 ,obj2); -> we can use this \ and this
 const obj3={...obj1, ...obj2};
 //console.log(obj3);

 //console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
 
 //console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 const course={
  coursename:"js in hindi",
  price:"999",
  courseInstructor:"Aditya"
 }

 //course.courseInstructor

 const {courseInstructor}=course

 //console.log(courseInstructor);op-Aditya

 const {courseInstructor:instructor}=course

 console.log(instructor);

  // {
  //   "name":"Aditya",
  //   "coursename":"js in hindi",
  //   "price":"free"
  // }
  [
    {},
    {},
    {}
  ]