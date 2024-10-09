const myObject={
  js:'javascript',
  cpp:'c++',
  rb:"rubyt",
  swift:"swift by apple"
}

for (const key in myObject) {
  // console.log(key);// this give key
  // console.log(myObject[key]);//it give object
}

const programmming=["js","rb","py","java"]
for (const key in programmming) {
//  console.log(key);
//  console.log(programmming[key])//it give value
}

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")


for(const key of map){
  console.log(key);// this canmt give you the value because map is not iteratable
}