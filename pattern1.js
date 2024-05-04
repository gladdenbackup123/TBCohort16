//square
for(k=1 ; k<=5 ; k++){
    let row = "";
    for(i=1 ; i<=5 ; i++){
        row += "* ";
    }
    console.log(row);
}

// //triangle 1
for(i=1 ; i<=5 ;i++){
    let row = "";
    for(j=1 ; j<=i ; j++){
        row += "* ";
    }
    console.log(row);
}

//triangle 2
for(i=5 ; i>=1 ;i--){
    let row = "";
    for(j=1 ; j<=i ; j++){
        row += "* ";
    }
    console.log(row);
}

// traingle 3
let n = 5;
for(i=1 ; i<=n ; i++){
    let row = "";
    //n-i spaces
    for(j=0 ; j<=n-i ; j++){
        row += " ";
    }
    //i stars
    for(j=1 ; j<=i ; j++){
        row += "*";
    }
    console.log(row);
}

//triangle 4
n = 5;
for(i=n ; i>=1 ; i--){
    let row = "";
    //n-i spaces
    for(j=0 ; j<=n-i ; j++){
        row += " ";
    }
    //i stars
    for(j=1 ; j<=i ; j++){
        row += "*";
    }
    console.log(row);
}

n = 5;
for(i=1 ; i<=n ; i++){
    let row = "";
    //n-i spaces
    for(j=0 ; j<=n-i ; j++){
        row += " ";
    }
    //i stars
    for(j=1 ; j<=2*i-1 ; j++){
        row += "*";
    }
    console.log(row);
}

for(i=n-1 ; i>=1 ; i--){
    let row = "";
    //n-i spaces
    for(j=0 ; j<=n-i ; j++){
        row += " ";
    }
    //i stars
    for(j=1 ; j<=2*i-1 ; j++){
        row += "*";
    }
    console.log(row);
}