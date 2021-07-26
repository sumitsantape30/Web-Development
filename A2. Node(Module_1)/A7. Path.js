let path= require("path");
let fs= require("fs");
for( let i=1; i <=10; i++){
    let dirPathToMake= `Lecture - ${i}`;
    fs.mkdirSync(dirPathToMake); 
   // fs.writeFileSync(dirPathToMake + "\\" + "readme.md", `#readme for ${dirPathToMake}`); 
    fs.writeFileSync(path.join(dirPathToMake, "readme.md"), `#readme for ${dirPathToMake}`); // join kiya to "\\" dene ki jarurat nhi woh khud smjh leta hai OS ke hisab se
}


let ext= path.extname(path.join(__dirname, "abc.js"));
console.group("ext", ext);

// agr humari boht badi path hai aur last mai file name hai to woh apko file ka name de dega aur agar folder hai to folder ka name de dega
let name= path.basename(__dirname); //yeh folder ka name de dega
console.log(name);
//agar iske last mai kisi file ka nam dedu to file dega
name= path.basename(path.join(__dirname, "abc.js"));
console.log(name);

