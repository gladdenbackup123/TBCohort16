import fs from "fs/promises"

let a = await fs.readFile("hello.txt");
let b = await fs.appendFile("hello.txt", "\n\n\n This is new text!");

console.log(a.toString());