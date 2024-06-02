function fetchData(){ //returns a promise

    let p = new Promise((resolve,reject)=>{
        let success = false;

        if(success){
            resolve("Data fetched successfully");
        }
        else{
            reject("Error fetching data");
        }
    })
    console.log(p);
    return p;
}

fetchData()
    .then((message)=>{
        console.log(message);
    })
    .catch((e)=>{
        console.error(e);
    })

