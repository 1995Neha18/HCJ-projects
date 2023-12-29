// greetings();
// console.log(x);

// function greetings() {
//   console.log("Hello Neha!");
// }

// let x = 5;
// console.log(greetings);

// --------------------------------
// let x;

// if(x ==1 && x==2 && x==3){
//  console.log("Hello World!");
// }
// Assign a value to the x, so that it can satisfy all three conditions and can print "Hello World!".

// let x = {
//    value: 1,
//    toString: function(){
//      return this.value++;
//    }
// };

// if(x == 1 && x == 2 && x == 3){
//   console.log("Hello World!");
// }
//Note: In the above code there is a comparison between Non-primitive & Primitive datatypes,
// Here non-primitive datatype is converted into primitive with the help of toString function.
// So, that the value of x will be equals to 1,2 then 3 after increments.

// ---------------------xx-----------------------

// { Closures } Interview asked questions :-

// *Problem:1

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1; // shadowing means here the value of count is being shadowed inside function scope
//     console.log(count); // 1
//    }
//    console.log(count); // 0
// })();

// *Problem:2

function createBase(num) {
  return function (innerNum) {
    return innerNum + num;
  };
}
var addSix = createBase(6);
console.log(addSix(10)); // 16
console.log(addSix(21)); // 27
