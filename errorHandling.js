// function divide(a,b){
//     if(b===0){
//         throw new Error("Division by zero is not allowed");
//     }
//     return a/b;
// }

// try{
//     let ans = divide(5,0);
//     console.log(ans);
// }
// catch(e){
//     console.error(e);
// }
// finally{ //finally block will always execute
//     console.log("Division operation is completed.");
// }


async function getData(){
    try{
        let response = await fetch("https://official-joke-api.appspot.com/random_joke")
        if(!response.ok){
            throw new Error("Error while fetching data");
        }
        else{
            let data = await response.json();
            console.log(data);
        }

    }
    catch(e){
        console.error(e);
    }
}

getData();