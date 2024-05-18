let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

//Example 1 : combine the elements of arr1 and arr2
let array = [...arr1 ,...arr2];
console.log(array); // [ 1,2,3,4,5,6,7,8]

//Add new elements 8,9 along with all elements of arr1
let nums = [...arr1,8,9];
console.log(nums);

let seven = [7,7,7,7,7,7];
let eight = [8,8,8,8,8,8];
let final = [...seven,0,...eight];
console.log(final);