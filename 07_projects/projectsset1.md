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
``` -->

<!-- ## project 2 - BmiCalculator

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

## project 4 - guess Number

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

 
```

## project 5 - key Board

```javascript
const insert=document.querySelector('#insert');

window.addEventListener('keydown',(e) => {
insert.innerHTML=`
<div class='color'>
<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "?'space':  e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
<div/> 
`
})
```

## project 6 - Unlimited color

```javascript
const start=document.querySelector("#start");
const stop=document.querySelector("#stop");

let intervelId=null;

const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  return randomColor;
};
const change=function(){
document.querySelector('body').style.backgroundColor=getRandomColor();
}

start.addEventListener('click',function(){
  if(!intervelId){
intervelId=setInterval(change,1000);
  }
})

stop.addEventListener('click',function(){
  if(intervelId){
    intervelId=clearInterval(intervelId);
    intervelId=null;
  }
})
```