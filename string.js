// const msg = "hey leave me alone. i dont want to see you plz.";

// //to uppercase method
// const angryMsg = msg.toUpperCase();

// //slice the string
// const greeting = msg.slice(0, 3);

// //string's only property LENGTH
// const len = msg.length

// msg.charAt(3);
// msg.indexOf('m');

// //repeat 10 times
// const repeatTenTimes = msg.repeat(10);

// //array of words
// const words = msg.split(' ');

// //array of cahrs
// const chars = msg.split('');

// //just output array
// const strCopy = msg.split();

// //trim the whitespaces
// const trimMsg = msg.trim();

// //to lower
// const whisper = angryMsg.toLocaleLowerCase();



// console.log(angryMsg);
// console.log(greeting);
// console.log(len);

// let num = Math.random();
// if(num < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5.");
//     console.log(num);
// }
// else if(num >= 0.5){
//     console.log("YOUR NUMBER IS GREATER THAN 0.5.");
//     console.log(num);
// }

// const age = Math.floor(Math.random() * 65 ) + 1;
// console.log(age);
// if (age < 5){
//     console.log("You are a baby. You get in for free");
// } else if(age < 10){
//     console.log("You are a child. You pay $10.");
// } else if (age < 65){
//     console.log("You are a adult. You pay $20");
// } else if(age >= 65){
//     console.log("You are a senior. You pay $10.");
// }


// const password = prompt("Enter your new password.");

// // password must 6+ characters
// if (password.length >= 6) {
//     // password must not included space
//     if (password.indexOf(" ") === -1) {
//         console.log("Good password.");
//     } else {
//         console.log("Password cannot include spaces.");
//     }
// } else {
//     console.log("Password is too short. Try again.");
// }

// const age = prompt("Enter your age.");
// if ((age >=0 && age < 5) || age >= 65 && age <100){
//     console.log("You are go to free.")
// }


//Object literals
// const person = {
//     firstName: "Mick",
//     lastName: "Jordan",
//     age: 19,
//     gender: "Male",
//     isAlive: true
// }

// console.log(person.isAlive)

//Arguments

// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }

// rant('i love her.');

// function getDiceNum(){
//     return Math.floor((Math.random() * 6) + 1);
// }

// function isSnakeEyes(dice1, dice2){
//     if ((dice1 === 1) && (dice2 === 1)){
//         console.log("Snake Eyes!");
//         gotSnakeEyes = true;
//     }else{
//         console.log("Not Snake Eyes!");
//     }
// }

// function rollDice(){
//     dice1 = getDiceNum();
//     dice2 = getDiceNum();
//     isSnakeEyes(dice1, dice2);
// }

// gotSnakeEyes = false;

// while (!gotSnakeEyes){
//     rollDice()
// }

//Capitalizeer

// function capitalizer(str){
//     let completeString = str[0].toUpperCase() + str.slice(1);
//     console.log(completeString);
// }

// days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// function returnDay(numOfDay){
//     if ((numOfDay <=0) || (numOfDay >7)){
//         return null;
//     }

//     return days[numOfDay -1];
// }

// function isShortsWeather(temperature){
//     if (temperature >= 75){
//         return true;
//     }

//     return false;
// }

// function lastElement(temp){
//     if (temp.length === 0){
//         return null;
//     }
//     return temp[temp.length - 1];
// }

// function sumArray(array){
//     let sum = 0;
//     for (i=0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }