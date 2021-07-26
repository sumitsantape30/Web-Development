let cp= require("child_process");
console.log("Trying to open Calculator");
cp.execSync("calc");
console.log("Calculator Opened");
// this will open the calculator

//website bhi open kr skte hai
let cp= require("child_process");
console.log("Trying to open Website");
cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("Website Opened");

// koi aur JS file bhi open kr skte hai
let cp= require("child_process");
let output= cp.execSync("node abc.js");
console.log("Output is : "+ output);

abc.js ek JS file hai jisme console.log("This is text") likha hua hai

Output: 
Output is : This is text
