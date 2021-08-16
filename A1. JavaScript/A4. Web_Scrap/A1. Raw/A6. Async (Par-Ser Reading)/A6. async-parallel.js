//async mai parallerly files read karne keliye
let fs= require("fs");
console.log("Before");

//hume bas call lagani hai fir jisko jo order mai print hona hai hojayega
fs.readFile("f1.txt", cb);
fs.readFile("f2.txt", cb1);
fs.readFile("f3.txt", cb2);

function cb(err, content){
    console.log("content:"+content);
}

function cb1(err, content){
    console.log("content:"+content);
}

function cb2(err, content){
    console.log("content:"+content);
}

console.log("After");
// jisko pehle CPU time mila woh waise print hoga
