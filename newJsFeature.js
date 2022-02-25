function greet(person, greet = "Hey There", penc = "!!!") {
  return `${greet} ${person} ${penc}`;
}
console.log(greet("Myo"));
