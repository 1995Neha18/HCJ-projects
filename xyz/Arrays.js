// *Problem-1. Some array in-built function

const nums = [2,4,8,10];

const newArray = nums.map((number) => {
  return number + 2;
})

console.log(newArray); // map function will always return a new array and it always takes a callback function.