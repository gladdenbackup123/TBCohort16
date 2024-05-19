//Array.of() - creating an array instance with elements

let arr = Array.of(2,1,8,9);
//console.log(arr);

let happy = Array.of('h','a','p','p','y');
//console.log(happy);

let mix = Array.of(2,1,'s','z',true,false,'hii');
//console.log(mix);

for(let i of mix){
    //console.log(typeof(i));
}



// Array.from() - Creates an array from an iterable object
let arr1 = Array.from("Hello World");
//console.log(arr1);

let arr2 = Array.from([1,2,6,8]);
//console.log(arr2);

let person = {name:'Gladden',role:'SDE'}
let arr3 = Array.from(Object.keys(person)); 
//console.log(arr3);

//find() - returns the first element that satisfies the test.
let arr4 = [-1,-5,4,-2,8,9];
let positive = arr4.find(i=>i>0);
let negative = arr4.find(i=>i<0);
// console.log(positive);
// console.log(negative);
let x = arr4.find(i=>i>5);
// console.log(x);

let numbers = [2,7,1,4,6,8,9,0,11,15];
let divby3 = numbers.find(i=>i%3==0);
// console.log(divby3);

//findIndex() - returns the index of first element that satisfies the test.

let arr5 = [2,1,-7,-8,4,0,-6]
let negindex = arr5.findIndex(i=>i<0);
let zeroindex = arr5.findIndex(i=>i==0);
let fiveindex = arr5.findIndex(i=>i==5);
// console.log(negindex);
// console.log(zeroindex);
// console.log(fiveindex);

//every() - checks whether all elements in the array satisfy the test.

let arr6 = [2,1,-5,6,3];
let checkPositive = arr6.every(i=>i>0);
let checkNegative = arr6.every(i=>i>0);
// console.log(checkPositive);
// console.log(checkNegative);

let arr7 = [9,3,6,9,3];
let divby3all = arr7.every(i=>i%3==0);
//console.log(divby3all);

//some() - returns true if atleast one element in array satisfies the test.
let arr8 = [1,2,3,4,5,8];
let pos = arr8.some(i=>i>0); //true
let neg = arr8.some(i=>i<0); //false
// console.log(pos);
// console.log(neg);

//join() - Joins all elements of an array into a string
let letters = ['n','e','h','a'];
let madam = letters.join('');
console.log(madam);

let seven = ['t','h','a','l','a'];
let dhoni = seven.join('-');
console.log(dhoni);

//fill() - fills the array with speficied element from start to end , if ramge is given , else it will fill the entire array.
arr9 = [1,2,3,4,5,6,7,8];
arr9.fill(0,2,7);
console.log(arr9);