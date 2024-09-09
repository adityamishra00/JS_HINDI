// problem with pollution with golbal declaration

(function chai(){
  // named iife
  console.log(`DB CONNECTED`);
})();//semicolumn is necessary

( () => {
  console.log(`DB CONNECTED TWO`);
})();

((name)=>{
  console.log(`DB CONNECTED ${name}`)
})('Aditya');

