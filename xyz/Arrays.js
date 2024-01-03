// *Problem-1. Some array in-built function

// const nums = [2,4,8,10];

// const newArray = nums.map((number) => {
//   return number + 2;
// })

// console.log(newArray); // map function will always return a new array and it always takes a callback function.

// const array = [2,4,8,10];

// const array = [2,4,6,8,10];
// array.forEach((num) => {
//   console.log(num*2);
// })
// forEach loop never returns a new array.

// *Problem-2. filter function

// const array1 = [2,4,6,8,10];

// const result = array1.filter((item) => {
//   if( item > 3)
//   return item;
// })
// console.log(result);

// *Problem-3. reduce function, when we want a single value result.

const array2 = [2,4,6,8,10];

const result = array2.reduce((acc,item) => {
  return acc * item;
},1)

console.log(result);

