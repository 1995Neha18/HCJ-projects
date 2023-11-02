// { Strings: When a textured data are stored inside a variable then it is known as strings. }

let str = "Hello World";
console.log(str);

// Different way of wriring console.log

console.log`Hello World`;
// Note: console.log is a function and we can pass any value inside it.
// So using backticjs instead of brackets we can also use console.log which gives an array of strings as output.

const str1 = "Neha";
console.log`Hello World ${str1} how are ${"you"}?`;
// Note: Here we can pass any value inside the console.log and it will give an array of strings as output when using backticks
// & the values inside the template literal will be written as a seperate variable.

// 1. Finding the length of the string.
const str2 = "Goodmorning";
console.log(str2.length);

// 2. Accessing the character of the string.
console.log(str2[3]);
console.log(str2.charAt(5));
console.log(str2.charAt(6));

// 3. Finding the index of the character.
console.log(str2.indexOf("n"));
console.log(str2.indexOf("Goodmorning"));


