// //Define a function
// function saySomething(something) {
// 	console.log(something);
// }

// // example
// function greeting(){
//     console.log('hello world');
// }
// greeting();

// // example
// function sumNumbers(numOne, numTwo, numThree){
//     return numOne + numTwo + numThree
// }
// console.log(sumNumbers(4,6,8,10,5,3,26,84,34)); // 18 (adds first three numbers)
// console.log(sumNumbers(4,6)); //NaN

// example
// function sumNumbers(numOne=4, numTwo=5, b, c){
//     return numOne + numTwo + b + c;
// }
// console.log(sumNumbers(1,2,10,20));

// // example
// function add(){
//     //declaring a new variable thats holding a 0
//     let sum = 0;

//     // for loop - loop through our list of arguments
//     for(let i= 0; i<arguments.length; i++) {
//         // sum + each individual argument at every loop
//         console.log('currently at loop # ' + i);
//         sum += arguments[i];
//         console.log(sum);
//     }
//     // return the latest value of sum
//     return sum;
// }
// console.log(`result of: ${add(1,2,3,4,5,6,7,8)}`);


// // JavaScript Functions: Part 1
// var billAmount =120;
// function gratuity(){
//     return billAmount * .2;
// }

// function totalWithGrat(billAmount){  //billAmount could be subbed with amount (or anything that would serve as a placeholder)
//     return gratuity() + billAmount;
// }
// console.log(`Your total including gratuity is: $${totalWithGrat(billAmount).toFixed(2)}`)  // .toFixed(#) -- gives us two decimel points



// let add = function(a,b){
//     return a + b
// };

// // FUNCTION DECLARATION  -- allows a function to be hoisted (used before decleared.)
// hoisted(); // logs "foo"

// function hoisted() {
//   console.log("foo");
// }

// // FUNCTION ASSIGNMENT  -- function is not hoisted therefor it will return an error. Function must be declared before use.
// // notHoisted(); // TypeError: notHoisted is not a function

// let notHoisted = function() {
//    console.log("bar");
// };

// // ANOMNYMOUS FUNCTIONS
// let calculator = {
//     // key:add
//     // value: function
//     add: function(a,b) { //add -- this was user defined.
//         return a + b;
//     }
// }
// console.log(calculator.add(2,3));

// let arrayOfMystery = [
//     ['anonymous','array'],
//     { name: 'anonymous object' },
//     function(){ return 'Anonymous Function!'}
// ];

// console.log(arrayOfMystery[0][1]); // array
// console.log(arrayOfMystery[1].name); // anonymous object
// console.log(arrayOfMystery[2]()); // anonymous function!


// // EXAMPLE 2
// let rpc = ["rock", "paper", "scissor"]
// function getComputerHand() {
//     parseInt(Math.random()*10) % 3;
// }


// function hands(go1, go2){
//     console.log("Player 1: " + go1);
//     console.log("Player 2: " + go2);
// }

// if (go1 == go2){
//     return "Draw";
// }
// if (go1 == "rock"){
//     if (go2 == "scissor"){
//         return "Player 1 Wins!";
//     } else{
//         return "Player 2 Wins!";
//     }
// }
// if (go1 == "paper"){
//     if (go2 == "rock") {
//         return "Player 1 Wins";
//     } else{
//         return "Player 2 Wins";
//     }
// }
// if (go1 == "scissor"){
//     if (go == "paper") {
//         return "Player 1 Wins";
//     } else{
//         return "Player 2 Wins";
//     }
// }

// let go1 = getComputerHand(); // computer's choice
// let go2 = hands[2]; // our choice
// let game_result = compare(go1, go2); // get the result

// console.log(game_result); // log the result

// let hands = ['rock', 'paper', 'scissors'];

// function getComputerHand(){ 
// 	return hands[parseInt(Math.random()*10) % 3]
// }

// function compare(choice1, choice2){ 
// 	console.log("Player1: " + choice1);
//   console.log("Player2: " + choice2);
  
//   if (choice1 == choice2){
// 		return "Tie!";
//   }
//   if (choice1 == "rock"){
// 		if (choice2 == "paper"){
//     	return "Player2 Won!";
// 		}
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "paper"){
//   	if (choice2 == "scissors"){
//     	return "Player2 Won!";
//     }
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "scissors"){
//   	if (choice2 == "rock"){
//     	return "Player2 Won!"
//     }
//     else{
//     	return "Player1 Won!"
//     }
//   }
// }

// let choice1 = getComputerHand(); // computer's choice
// let choice2 = hands[2]; // our choice
// let game_result = compare(choice1, choice2); // get the result

// console.log(game_result); // log the result



// // IIFE Functions
// (function(){
// 	let myVar = "look mom, private variables!";
//     console.log('myVar ' + myVar)
// 	//Do some stuff with myVar...
// })();

// console.log(myVar); //undefined;



// // SCOPE CHAIN AND CLOSURES
// // looks for required variables from 'inside - out'

// city is a variable defined in the global scope
// let city = "New Orleans";
// // function assignment
// let greet = function(){
    // using a variable that was defined outside of the function's scope
    // closure created when a variable defined outside of this scope is being used
// }

// // NESTED SCOPE
// let landscape = function() {
//     let result = "";

//     let flat = function(size) {
//         for (let count = 0; count < size; count++)
//             result += " _ ";
//     };

//     let mountain = function(size) {
//         result += "/";
//         for (let count = 0; count < size; count++)
//             result += " '";
//         result += "\\";
//     };

//     flat(3);
//     mountain(4);
//     flat(6);
//     mountain(1);
//     flat(1);
//     return result;
// };

// console.log(landscape());


// let name = 'David';
// let greet = function() {
// 	let name = 'Matt'
// 	console.log(name);
// }

// console.log(name); // David
// greet(); // Matt


// function outer(){
//   var a = "grapes"
//   var b = {
//       fruit: "kiwi",
//       color: "green"
//   };
//   console.log(a, b)
//     function inner() {
//     a = "beans"
//     b.fruit = "banana"
//     b.color = "yellow"
//      }
//      console.log(a, b)
//     inner();
//   }
//   outer();
  

// // THIS KEYWORD
// // refers to whichever keyword you are in
// function
// .length

// example 1
// let teacher = {
// 	name: 'Assaf',
// 	sayName: function() {
// 		console.log(this.name);  
// 	}
// }
// teacher.sayName(); //'Assaf'

// example 2
// function sayName() {
// 	console.log(this.name);
// }

// let teacher1 = {
// 	name: 'Assaf',
// 	speak: sayName
// }

// let teacher2 = {
// 	name: 'Shane',
// 	speak: sayName
// }

// teacher1.speak(); // 'Assaf'
// teacher2.speak(); // 'Shane'
