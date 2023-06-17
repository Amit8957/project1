//Synchronous or blocking 
//-line by line execution 

//Asynchronous or non -blocking 
//-line by line execution not gauranted 
//-callbacks will fire


//example of synchronous 
/*const fs =require("fs");
let text =fs.readFile("rohan.txt" ,"utf-8" ,(error ,data)=>
{
    console.log(error ,data);

});
console.log("this a message"); */
//here firstly second console text get printed first and then error,data get printed because resding file takes some time by processor so next statement get printed insted of wating for the first console
//so it is called example of synchronous method 

//example of asynchronous 
const fs = require("fs");
fs.readFile("rohan.txt" ,"utf-8" ,(error,data)=>{
    console.log(data);
});
console.log("i am operating system");

//it works on non blockibng 










