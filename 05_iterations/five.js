// for each
const coading= ["js","ruby","java","c+++"]
// coading.forEach(function fun(val){
//   console.log(val);
// })
// coading.forEach(function (item){
//   console.log(item);
// })
// coading.forEach( (item)=>{
//   console.log(item);
// })

// all give the same output

function printme(item){
  //console.log(item);
}

coading.forEach(printme)//only give referance

coading.forEach((item,index,arr)=>{
  // console.log(item,index,arr);
})

const mycoding=[
  {
    languageNmae:"javascript",
    langauageFileName:"js"
  },
  {
    languageNmae:"java",
    langauageFileName:"java"
  },
  {
    languageNmae:"python",
    langauageFileName:"phythom"
  },
  {
    languageNmae:"cpp",
    langauageFileName:"cpp"
  },
  
]

mycoding.forEach((item)=>{
  // console.log(item.langauageFileName)
})

coading.forEach((item, index, arr)=>{
  console.log(item,index,arr);
})