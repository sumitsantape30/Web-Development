let fs= require("fs");
let files= ["./f1.txt", "./f2.txt", "./f4.txt", "./f5.txt"];
// parallerly read using ans async function
//start the work
// also give us a cb function from which we can intimate you after the work is completed
for(let i=0; i < files.length; i++){
    fs.readFile(files[i], cb);
}

function cb(err, data){
    console.log(data.byteLength); //ek file ke andar kitna content hai 
    console.log("Content: "+data);
}

//=======================================================================================

let fs= require("fs");
let files= ["./f1.txt", "./f2.txt", "./f4.txt", "./f5.txt"];
// parallerly read using ans asyn function
//start the work
// also give us a cb function from which we can intimate you after the work is completed
console.log("before");

for(let i=0; i < files.length;){
    fs.readFile(files[i], function cb(err, data){
        console.log("data: "+data);
        i++;
    });
}
console.log("after");

/* yeh sirf before print karega, aur loop enter krte hi i ki value 0 hi rahegi woh kabhi loop exit hi nhi karega */
