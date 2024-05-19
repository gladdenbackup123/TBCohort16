function checkPrime(n){
    for(let i=2 ; i<n ; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

let arr = [3,19,12,17,29];
let primes = arr.every(checkPrime);
console.log(primes);