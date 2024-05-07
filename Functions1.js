let arr = [10,20,30,40,50];

//let ans = arr.map(i => i+5);
//console.log(ans);

//square all elements of array
let square = arr.map(i => i*i);
//console.log(square);

//reduce
//let arr = [10,20,30,40,50];
let sum = arr.reduce((sum,i) => sum+i);
//console.log(sum);

//filter 

let nums = [1,2,3,4];
let even = nums.filter(i => i%2==0);
console.log(even);

let odd = nums.filter(i => i%2!=0);
console.log(odd);

let ans = nums.filter(i => i>5);
console.log(ans);

let product = nums.reduce((product,i) => product*i , 1);
console.log(product);
