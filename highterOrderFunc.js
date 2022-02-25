function callTwice(func) {
  func();
  func();
}

const rollDice = function () {
  console.log(Math.floor(Math.random() * 6 + 1));
};

callTwice(rollDice);
