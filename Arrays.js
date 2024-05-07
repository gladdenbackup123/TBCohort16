const { copyFileSync } = require("fs");

//Creating an array
let arr = [10,20,30,40,50];

//Accessing elements of an array
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[4]);

// sum of first and last element
let sum = arr[0] + arr[4];
//console.log(sum);

//Iterating the array
// for(i=0 ; i<=4 ; i++){
//     console.log(arr[i]);
// }

//console.log(arr.length);

//Insertion
console.log(arr);
arr.push(60);
arr.push(70);
arr.push(80);
console.log(arr);
console.log(arr.length);

