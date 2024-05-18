//1. Map function - transforms every element in array
let arr = [3,4,8,7];

//Example 1 : Double every element of array
let doubled = arr.map(i=>i*2);
// console.log(arr);
// console.log(doubled);

// Example 2 : Find the squares and cubes of all elements in array
let squares = arr.map(i=>i*i);
let cubes = arr.map(i=>i*i*i);
// console.log(arr);
// console.log(squares);
// console.log(cubes);


//2. Filter - creates a new array with all elements that pass the test implemented by the function
let nums = [2,9,14,21,3,28,63];
//Example 1 : Get all elements from nums that are divisible by 7
let result = nums.filter(i=>i%7==0);
//console.log(result);

//Example 2 : Remove March from Months
let months = ["Jan","Feb","Mar","Apr","May"];
let updated = months.filter(i=>i!="Mar");
//console.log(updated);


//----------------------------

//Splice Method :
//Remove an element from array
let numbers = [1,2,3,4,5]; //remove 3
//numbers.splice(2,1); //Starting from index 2 , remove 1 element.
numbers.splice(2,3); ////Starting from index 2 , remove 3 elements.
//console.log(numbers);

//Remove all elements using splice method
let array = [1,2,3,4,5];
array.splice(0,array.length);
let removed = array.splice(3); // removes all elements starting from index 3
//console.log(array);
//console.log(removed);


// 3. Reduce function - reduces the array to a single output value
//Example 1 : Get the sum of all elements in array
array = [1,2,3,4,5];
let addition = array.reduce((sum,i)=>sum+i,0);
console.log(addition);