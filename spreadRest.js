const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = "abcdefghig";

const sumAll = (...num) => {
  return num.reduce((total, el) => total + el);
};

const strArr = [...str];
console.log(strArr);
console.log(sumAll(...numArr));

let [first, second, third, ...theRest] = numArr;
console.log(first);
console.log(second);
console.log(third);
console.log(...theRest);

first = 111;
console.log(first);
console.log(numArr);

const obj = {
  name: "Myo Myint Aung",
  age: "21",
  address: "Mandalay",
};

const { name: fullName, age, address, dob = "Nov" } = obj;
console.log(fullName);
console.log(age);
console.log(address);
console.log(dob);

express = (user) =>
  `${user.age} years old ${user.name} lives in ${user.address}`;

console.log(express(obj));

express2 = ({ age, name, address }) => {
  return `${age} years old ${name} lives in ${address}`;
};

console.log(express2(obj));
