const fs = require('fs');

console.log("Started writing file."); //1 
fs.writeFile("hello.txt","Hello , how are you?", ()=>{
    console.log("writing file.....");
}); //3
console.log("File written successfully."); //2