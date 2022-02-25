const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((e) => console.log(e));
const arr2 = arr.map((e) => e);
console.log(arr2);
const oddArr = arr.filter((e) => e % 2 == 1);
console.log(oddArr);

arr.filter((e) => e > 5);

const aa = arr.filter((e) => e % 2 == 1 && e > 6);
console.log(aa);

const max = arr.reduce((max, num) => {
  if (num > max) return num;
  return max;
});

console.log(max);

const car = {
  name: "ok",
  drive() {
    console.log(`${this.name} is driving.`);
  },
};

car.drive();
