///////LOOPS  ASSIGNMENT \\\\\\\\
//1 CREATING A LESSON PLAN
//  let myWork : {name: string; status:boolean } [] = []
//  for (let i=1; i<=10; i++){
//     let lesson = {
//         name: 'lesson ${i}',
//         status:i % 2 === 1
//     };
// myWork.push(lesson);
//  }
// console.log(myWork);
//           /////////GUESSING GAME\\\\\\\\\\\
// let maxvalue =8;
// let randomNumber =Math.floor(Math.random() * maxvalue) +1;
// console.log(randomNumber);
// let iscorrectguess: boolean =false;
// let guesses :number[]= [1,3,5,6,0];
// let i =0;
// while(!iscorrectguess && i < guesses.length ){
// let currentGuess : number =guesses [i]} ;
// console.log ('Guess #${index +1}:$ {currentGuess}');
// if ( 'currentGuess === randomNumber' ){
//     console.log("congragulation! you guess the correct");
//     iscorrectguess =true;
// }
// else if (guesses [i] < randomNumber){
//     console.log( "wrong guesss! too low");
// }else{
//     console.log("Wrong guess too hogh");
// }
// i++;
////////// COUNTER INCREMENTER\\\\\\\\\
// let counter =0;
// let step =3;
// do{
//     console.log("counter");
//     counter+=step;
// } while(counter < 100);
///////////  EXPLORING OBJECT \\\\\\\\\\
var myObject = {
    item1: "lenovo laptop",
    item2: "Dell laptop",
    item3: "Hp laptop",
};
for (var value in myObject) {
    console.log('value:${value},${myObject[value]}');
}
/////////// ARRAY WITH LOOPS \\\\\\\
var numberArray = [];
for (var f = 0; f <= 10; f++) {
    numberArray.push(f);
}
;
console.log(numberArray);
