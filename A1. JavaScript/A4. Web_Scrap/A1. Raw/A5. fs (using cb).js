let fs= require("fs");
let content= fs.readFileSync("cb.js");

//a js dev can't create an asynchronus function, evironment will it to you.

console.log("Before");
fs.readFile("cb.js", cb);
// console.log("content: "+ content);
function cb(err, data){ // by convention call by function error first hota hai means by convention err is first parameter
    if( err){
        console.log("Error: "+err);
    }else{
        console.log("content: "+data);
        //console.log("After"); //agar yaha after likhte to pehle before print hoga then content and then after
    }
}
console.log("After");
//so pehle before print hoga then after then bakika content print hoga
