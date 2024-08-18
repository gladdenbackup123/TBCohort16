const fs = require('fs');

console.log("Started"); //1

fs.writeFile("hii.txt","Hii , how are you?", ()=>{
    console.log("done"); //3
    fs.readFile("hii.txt",(err,data)=>{ 
        console.log("Error - ",err); //4
        console.log("Data - ",data.toString()); //5
    })
}); 

console.log("Ended"); //2