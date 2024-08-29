const name ="aditya"
const  repoCount=50

//console.log(name+ repoCount+" value");
//console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`);
const gameName=new String ('aditya')
//console.log(gameName[0]);
//cosnole.log(gameName.__promo__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString= gameName.slice(-7,2)
//console.log(anotherString); us eto print from reverse

const newStringone= "   hitesh   ";
//console.log(newStringone);
//console.log(newStringone.trim())
//remove the out space

const url= "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))