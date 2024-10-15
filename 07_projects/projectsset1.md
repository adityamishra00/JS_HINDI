# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project  1 -ColorChanger

```javascript
const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
buttons.forEach(function(button){
  // console.log(button)
button.addEventListener('click',function(e){
//   console.log(e)
// console.log(e.target)
if(e.target.id==='white'){
  body.style.backgroundColor=e.target.id;
}
if(e.target.id==='yellow'){
  body.style.backgroundColor=e.target.id;
}
if(e.target.id==='blue'){
  body.style.backgroundColor=e.target.id;
}
if(e.target.id==='grey'){
  body.style.backgroundColor=e.target.id;
}
})
})
```
## project 2 - BmiCalculator

```javascript
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
e.preventDefault();

  const height=parseInt(document.getElementById('height').value)
const weight=parseInt(document.getElementById('weight').value);
const result=document.getElementById('results')
if(height==='' || height<0 || isNaN(height)){
  result.innerHTML=`please give a valid height ${height}`;
}
else if(weight===''||weight<0||isNaN(weight)){
  result.innerHTML=`please give a valid weight ${weight}`;
}else{
const bmi=(weight/((height*height)/10000)).toFixed(2);
if(bmi<18.6){
  result.innerHTML=`Under Weight :<span>${bmi}</span>`
}
else if(bmi>=18.6 && bmi<=24.9){
  result.innerHTML=`Normal Weight :<span>${bmi}</span>`
}
if(bmi>24.9){
  result.innerHTML=`Over Weight :<span>${bmi}</span>`
}
}
});
```

## project-3 -Digital clock

```javascript
const clock=document.querySelector('#clock')
setInterval(function(){
const date=new Date()
// const hours=date.getHours()
// const minutes=date.getMinutes()
// const seconds=date.getSeconds()
clock.innerHTML = date.toLocaleTimeString();

},1000);
```