function checkPositive(n){
    return n>0;
}

let nums = [-1,-3,1,0,8,-2,6];
let positive = nums.filter(checkPositive);
console.log(positive);