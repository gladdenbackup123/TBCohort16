const fs = require('fs');

console.log("Started"); //1
fs.readFile("sample.txt" , (err,data)=>{ //3
    console.log("Error - ",err);
    console.log("Data - ",data.toString());
})
console.log("Ended"); //2
