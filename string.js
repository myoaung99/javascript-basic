const msg = "hey leave me alone. i dont want to see you plz.";

//to uppercase method
const angryMsg = msg.toUpperCase();

//slice the string
const greeting = msg.slice(0, 3);

//string's only property LENGTH
const len = msg.length

msg.charAt(3);
msg.indexOf('m');

//repeat 10 times
const repeatTenTimes = msg.repeat(10);

//array of words
const words = msg.split(' ');

//array of cahrs
const chars = msg.split('');

//just output array
const strCopy = msg.split();

//trim the whitespaces
const trimMsg = msg.trim();

//to lower
const whisper = angryMsg.toLocaleLowerCase();



console.log(angryMsg);
console.log(greeting);
console.log(len);

let num = Math.random();
if(num < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5.");
    console.log(num);
}
else if(num >= 0.5){
    console.log("YOUR NUMBER IS GREATER THAN 0.5.");
    console.log(num);
}

const age = Math.floor(Math.random() * 65 ) + 1;
console.log(age);
if (age < 5){
    console.log("You are a baby. You get in for free");
} else if(age < 10){
    console.log("You are a child. You pay $10.");
} else if (age < 65){
    console.log("You are a adult. You pay $20");
} else if(age >= 65){
    console.log("You are a senior. You pay $10.");
}