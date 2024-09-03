const marval_heros =["thoe","spidarman","ironman"]
const dc_heros=["superman","flash","batman"]

//marval_heros.push(dc_heros); -> it push the whole array not the element of the array

//console.log(marval_heros);
//console.log(marval_heros[3][1]); -> 3 rd index is not a element it is an array so to take element from inside array we can use like that. 

//const ans=marval_heros.concat(dc_heros) -> use to add all element of second arr in first array
//console.log(ans);

//const newans=[...dc_heros,...marval_heros] -> ... is use to split all arr in element by element

// console.log(newans);

// const another_array=[2,3,4,[4,5,6],7,8,[9,8,[3,5,6],7],4];
// const another_ans=another_array.flat(Infinity) -> if we have many backet in an array then we can use *** flat *** to remove all and add all element inm one array; 
// console.log(another_ans);


//console.log(Array.isArray("aditya"));
//console.log(Array.from("Aditya")) -> it is use to convert string to array

// console.log(Array.from({name: "Aditya"})) -> it give empty array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

