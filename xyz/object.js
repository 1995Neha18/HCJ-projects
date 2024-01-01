// *Problem-1  Create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2.

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

function multiplyByTwo(obj){
  for(key in obj){
    if(obj[key] == Number){
     // obj[key] = obj[key]*2;
     obj[key] *= 2;
    }
  }
}

multiplyByTwo(nums)
console.log(nums);