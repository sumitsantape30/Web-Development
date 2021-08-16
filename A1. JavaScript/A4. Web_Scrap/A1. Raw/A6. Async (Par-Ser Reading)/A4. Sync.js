//yaha Sync mai aapne serially file ko read kiya 
let fs= require("fs");
console.log("before");
let content= fs.readFileSync("f1.txt");
console.log("content"+content);
content= fs.readFileSync("f2.txt");
console.log("content"+content);
content= fs.readFileSync("f3.txt");
console.log("content"+content);
console.log("After");

/*Output:
before
contentI am f1
contentI am f2
contentI am f3
After
*/
