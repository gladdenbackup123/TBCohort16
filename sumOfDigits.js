function sumOfDigits(n){
    let sum = 0;
    while(n!=0){
        let digit = n%10;
        n = Math.floor(n/10);
        sum += digit;
    }
    return sum;
}

console.log(sumOfDigits(2461));
console.log(sumOfDigits(123));
console.log(sumOfDigits(789));