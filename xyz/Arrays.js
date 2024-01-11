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

// const array2 = [2,4,6,8,10];

// const result = array2.reduce((acc,item) => {
//   return acc * item;
// },1)

// console.log(result);

// *Problem-4. Slice function, it takes two arguments start and end index.

// const array3 = [2,4,6,8,10];
// const newArray = array3.slice(0,3)
// console.log(newArray);

// *Problem-5. Splice function, it takes three arguments start, no. of items to be deleted and adds a new element instead of deletion index.

// const array3 = [2,4,6,8,10];
// array3.splice(0,3,5)
// console.log(array3);

// *Problem-6. Find the maximum in the given array.


// let arr = [1, 2, 3, 4, 5];
function findMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

findMax([1, 2, 3, 4, 5]);
