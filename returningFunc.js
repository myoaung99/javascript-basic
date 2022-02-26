import arr from "./arrayMethod";

console.log(arr);

function makeBetweenFunc(min, max) {
  return function (num) {
    return min <= num && num <= max;
  };
}

const isAdult = makeBetweenFunc(0, 18);
isAdult(18);

const isSenior = makeBetweenFunc(60, 80);

class Human {
  name = "Myo";
  printName = () => console.log(this.name);
  sayGender = () => console.log("Male");
}

class Person extends Human {
  constructor(age) {
    super();
    this.name = "Myo Myint Aung";
    this.age = age;
  }
  printName = () => console.log(this.name);
}

const p = new Person(21);
p.printName();
p.sayGender();
console.log(p.age);
