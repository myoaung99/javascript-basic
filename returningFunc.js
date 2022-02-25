function makeBetweenFunc(min, max) {
  return function (num) {
    return min <= num && num <= max;
  };
}

const isAdult = makeBetweenFunc(0, 18);
isAdult(18);

const isSenior = makeBetweenFunc(60, 80);
