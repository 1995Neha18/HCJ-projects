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

// *Problem: 2
// calculate the frequency of  letter in a string "aabsssd".

const String = "aabsssd";

function occurrence(str){
 const obj = {};

 for(let i = 0; i < str.length; i++){
    if(obj[str[i]] === undefined){
     obj[str[i]] = 1;
    }
    else {
     obj[str[i]]++;
    }
    // obj[str[i]] = obj[str[i]] == undefined ? obj[str[i]] = 1 : obj[str[i]] + 1;
    // obj[str[i]] = obj[str[i]] === undefined ? 1 : obj[str[i]] + 1;
 }
 console.log(obj);
}
occurrence(String);

// *Problem: 3
//Count the number of each fruits without repeating the name ofnthe fruits which occurs again.
// const fruits = [
//   { Apple: 4, Orange: 7, Grapes: 3 },
//   { Guava: 6, Lemon: 4, Banana: 8 },
//   { Orange: 5, Pineapple: 7, Apple: 7 },
// ];

// const countedFruits = {};

// fruits.forEach((element) => {
//   // console.log(element);   output: whole object will be printed
//   for (let value in element) {
//     // console.log(key);      output: all keys existing inside the object is printed
//     if (countedFruits[value]) {
//       // above object
//       countedFruits[value] = countedFruits[value] + element[value]; // output: If in the above object, there is a key which already exist then only increment the counting inside the key.
//     } else {
//       countedFruits[value] = element[value]; // output: If the key doesn't exist inside the object, then add the key as well as its value i..e, element[value].
//       // console.log(countedFruits[value]);
//     }
//   }
// });

// console.log(countedFruits);

// const fruits = [
//   { Apple: 4, Orange: 7, Grapes: 3 },
//   { Guava: 6, Lemon: 4, Banana: 8 },
//   { Orange: 5, Pineapple: 7, Apple: 7 },
// ];

// const countedFruits = {};

// fruits.forEach((element) => {
//   for(let key in element){
//    countedFruits[key] = countedFruits[key] ? countedFruits[key] + element[key] : element[key];
//   }
// });

// console.log(countedFruits);

// *Problem: 4
// create a function to check if string is Anagram or not.

// const firstLetter = "Silent";
// const secondLetter = "Listen";

// function isAnagram(S1, S2){
//   let a = S1.toLowerCase();
//   let b = S2.toLowerCase();

//   a = a.split("").sort().join("");
//   b = b.split("").sort().join("");

//   return a === b;
// }

// console.log(isAnagram(firstLetter, secondLetter));
