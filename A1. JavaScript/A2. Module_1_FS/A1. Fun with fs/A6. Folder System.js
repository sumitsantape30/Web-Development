// path module
let fs = require("fs");
let path= require("path");

//path : jo addresses/paths hote hai unko platform independent banane ke kam aata hai yeh

// agar koi folder ke andar koi file build karni hai, input mai file ka name aur content ayega
let inputArr= process.argv.slice(2);
let fileName= inputArr[0];
let content= inputArr[1];
console.log("FileName: ",fileName);
console.log("Content: ", content);
let currentPath = process.cwd(); //abhi aap konse folder ke andar ho 

//path -> paths -> platform Independent
let filePath= path.join( currentpath, "dir1", fileName); // currentPath ke andar dir1 folder banage aur usme file
console.log("filePath", filePath);
fstat.writerFileSync("filePath", "content");


// let joinedPath= path.join(currentPath, "abc", "def", "efg");
// console.log("JoinedPath", joinedPath); //jo current path hai usme abc def efg join hoajyega
