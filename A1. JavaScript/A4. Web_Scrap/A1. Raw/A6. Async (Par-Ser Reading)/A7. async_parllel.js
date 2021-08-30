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
