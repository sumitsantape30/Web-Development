//directory  means folders
let fs= require("fs");

// isme create and delete kr skta hu
fs.mkdirSync("myDirectory"); //mai abhi jis location pe hu wahape myDirectory nam ka folder ban jayega

//agar is folder ko remove karna hai to
fs.rmdirSync("myDirectory");

// jo path hai, does it exist or not
//woh path exist krti hai ki nhi
let doesExist= fs.existsSync("D:\\Web Dev\\JS\\Getting Started\\Module_1");
console.log("This path exists ?", doesExist); // yeh true or false print karega

//path
// D:\Web Dev\JS\Getting Started\Module_1\myDirectory -> Yeh path ek directory ko correspond krti hai
// D:\Web Dev\JS\Getting Started\Module_1\fs.js -> yeh path ek file ko correspond krta hai

//so jab input mai path ayega hume dekhna hoga ki yeh ek file ka ya folder ki path hai yeh dekhna hoga isliye function hote hai
let statsOfAPath= fs.lstatSync("f1.txt");
console.log("stats", statsOfAPath); // yeh pura stats dega jaise kitna time hua, size n all
console.log("isFile?", statsOfAPath.isFile()); //file hai ya nhi 
console.log("isDirectory?", statsOfAPath.isDirectory()); // directory hai ya nhi

//jo yeh path hai usme content content kya kya hai uske liye
let address= "D:\\Web Dev\\JS\\Getting Started\\Module_1"
let content= fs.readdirSync(address);
console.log("Directory Content",content); // content of the directory
