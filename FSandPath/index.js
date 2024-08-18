//Work with fs module
const fs = require('fs');
// console.log(fs);

console.log("Started writing file."); 
fs.writeFileSync("sample.txt","hello world!"); 
console.log("File written successfully.");