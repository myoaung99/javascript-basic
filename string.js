'use strict';

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

//Resurcion vs For loop

// function numRange(n){
//     for (let i=n; i>0; i--){
//         console.log(i);
//     }
//     console.log("Yahoo!");
// }
// numRange(3);

// function numRangeResurcion(n){
//     if(n <= 0){
//         console.log("Yahoo!");
//         return;
//     }
//     console.log(n)
//     numRangeResurcion(n-1);
// }
// numRangeResurcion(7);

// function sumRange(n){
//     let total = 0;
//     for(let i=n; i>0; i--){
//         total += i;
//     }
//     return total;
// }
// console.log(sumRange(3));

// function sumRangeRecursion(n, total = 0){
//     if (n <= 0){
//         return total;
//     }
//     total += n;
//     return sumRangeRecursion(n-1, total + n)
// }
// console.log(sumRange(5));

// myArray = [1,3,4,2];

// function sumArr(arr, n){
//     let sum = 0;
//     for (let i=0; i<n; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// sumArr(myArray, 3);

// function sumRangeRecursion(n, total = 0){
//     if (n <= 0){
//         return total;
//     }
//     return sumRangeRecursion(n-1, total + n);
// }

// console.log(sumRangeRecursion(5));

// const maximum = parseInt(prompt("Enter the maximum number."));
// if(!maximum){
//     maximum = parseInt(prompt("Enter the valid number."));
// }

// const targetNum = Math.floor(Math.random() * maximum + 1);

// let guess = prompt("Enter your guess");
// let attemps = 1;

// while (parseInt(guess) !== targetNum){
//     if(guess === "q") break;
//     attemps++;
//     if( parseInt(guess) > targetNum){
//         console.log("Too High. Try to guess again.");
//         guess = prompt("Enter your guess");
//     }else {
//         console.log("Too Low. Try to guess again.");
//         guess = prompt("Enter your guess");
//     }
// }

// if (guess === "q"){
//     console.log("Qutting in process. Thanks for trying out.")
// }else{
//     console.log("Congrats");
//     console.log(`You Win!. You just try with ${attemps} attemps.`);
// }

// for (let char of "hello world"){
//     console.log(char);
// }


// let myArr = [];
// for (let i = 1; i<10; i++){
//     myArr.push(i);
// }
// console.log(myArr)

// for (let num of myArr){
//     console.log(num * num);
// }

// const testScore = {
//     x: 3,
//     y: 4,
//     z: 5
// }

// let sum = 0;
// let score = Object.values(testScore);
// for(let value of score){
//     sum += value;
// }

// console.log(sum);
// console.log(sum/score.length);

//function Expression

// let square = function (num){
//     return Math.pow(num, 2);
// }

// function makeAgeDecider(min, max){
//     return function(num){
//         return num>=min && num<=max;
//     }
// }

//Methods

// let myObj = {
//     "name": "dev.myint",
//     "drink": function(){
//         console.log("Drinking water.")
//     },
//     eat(){
//         console.log("Eating rice.")
//     }
// }

// let square = {
//     area(side){
//         return side * side;
//     },
//     perimeter(side){
//         return side * 4;
//     }
// }

// let hen = {
//     "name": "Helen",
//     "eggCount": 0,
//     "layAnEgg": () => {
//         this.eggCount++;
//     }
// }

// const greet = (str) => {
//     console.log(`Hey, ${str}`);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const oddNumXtwo = numbers.filter(n => n % 2 === 1).map(n => n * 2);

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// const goodMovies = movies.filter(m => m.score > 80);
// const badMovies = movies.filter(m => m.score < 70);

// const goodTitles = goodMovies.map(m => m.title);

// const goodMovieTitle = movies.filter(m => m.score > 80).map(m => m.title);

// const movie = movies.forEach(m => console.log(m.title.toUpperCase()))

// let allEven = array => {
//     return array.every(num => num % 2 === 0)
// }



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const total = numbers.reduce((total, num) => {
//     return total+= num;
// } )

// const minNum = numbers.reduce((min, num) => {
//     if (num < min){
//         return num;
//     }
//     return min;
// })

// const maxNum = numbers.reduce((max, num) => {
//     if (num > max){
//         return num;
//     }
//     return max;
// }, 30)

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// const bestMovie = movies.reduce((highestRate, currentRate) => {
//     if(currentRate.score > highestRate.score){
//         return currentRate.score;
//     }
//     return highestRate;
// })

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let max = Math.max(...numbers);

let driverLicense = false;
const isPass = true;

if (isPass) driver = true;
if (driverLicense) console.log("I can drive :D 🚗")