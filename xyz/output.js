// Output Based Interview Questions:

// *Problem: 1
// function show(...args){
//  console.log(typeof args);
//  console.log(typeof arguments);

//  console.log(Array.isArray(args));
//  console.log(Array.isArray(arguments));
// }
// show(1,2,3)

// *Problem: 2
// let x = [1,2,3,4,5]
// console.log(typeof x); // output:-  'object' because x is an array, and in JavaScript, arrays are a type of object.

// let y = {
//  name: "Neha",
//  age: 28,
// }
// console.log(typeof y)

// console.log(typeof NAN)

// Count the number of each fruits without repeating the name ofnthe fruits which occurs again.
const fruits = [
  { Apple: 4, Orange: 7, Grapes: 3 },
  { Guava: 6, Lemon: 4, Banana: 8 },
  { Orange: 5, Pineapple: 7, Apple: 7 },
];

const countedFruits = {};

fruits.forEach((element) => {
  // console.log(element);   output: whole object will be printed
  for (let value in element) {
    // console.log(key);      output: all keys existing inside the object is printed
    if (countedFruits[value]) {
      // above object
      countedFruits[value] = countedFruits[value] + element[value]; // output: If in the above object, there is a key which already exist then increment the value inside the key.
    } else {
      countedFruits[value] = element[value]; // output: If the object is having a unique key then write it.
      // console.log(countedFruits[value]);
    }
  }
});

console.log(countedFruits);
