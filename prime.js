function checkprime(n){
    let prime = true;
    for(i=2 ; i<n ; i++){
        if(n%i==0){
            prime = false;
        }
    }
    return prime;
}

for(i=2 ; i<=100 ; i++){
    if (checkprime(i)==true){
        console.log(i);
    }
}