//firstly we have to include the module written alreadyin library of node js and here we put fs as string in a require dunction as argument
const fs = require("fs");
let text =  fs.readFileSync("amit.txt" ,"utf-8");

console.log(text);
console.log("the content of the file is");
text=text.replace("content " ,"rohan");


console.log("creating a new file ");
fs.writeFileSync("rohan.txt",text);