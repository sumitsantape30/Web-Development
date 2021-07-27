//directory means folders
let fs= require("fs");

// isme create and delete kr skta hu
fs.mkdirSync("myDirectory"); //mai abhi jis location pe hu wahape myDirectory nam ka folder ban jayega

fs.writeFileSync("myDirectory/myfile.txt", "my content"); //maine abhi jo directory banayi MyDirectory uske andar myfile nam ki file create kr rhe hai aur usme content dal rhe hai "my Content".

//for next operation myDirectory folder mai aisehi files banwalo

let content= fs.readdirSync("myDirectory"); // meri directory ke andar jo files hai woh lake dega
console.log(content); // output: [ 'mtfile2.txt', 'myfile.txt', 'myFile3.txt' ]

for( let i= 0; i< content.length; i++){ // uss directory mai jitni files hai remove karwayenge
    console.log("file", content[i], "is removed");
    fs.unlinkSync("myDirectory/"+content[i]);
}

Output:
[ 'mtfile2.txt', 'myfile.txt', 'myFile3.txt' ]
file mtfile2.txt is removed
file myfile.txt is removed
file myFile3.txt is removed


//agar is folder ko remove karna hai to
fs.rmdirSync("myDirectory");

// jo path hai, does it exist or not
//woh path exist krti hai ki nhi
let doesExist= fs.existsSync("D:\\Web Dev\\JS\\Getting Started\\Module_1");
console.log("This path exists ?", doesExist); // yeh true or false print karega

//path
// D:\Web Dev\JS\Getting Started\Module_1\myDirectory -> Yeh path ek directory ko correspond krti hai
// D:\Web Dev\JS\Getting Started\Module_1\fs.js -> yeh path ek file ko correspond krta hai

//so jab input mai path ayega hume dekhna hoga ki yeh input mai ayi path ek file ki yafir folder ki path hai yeh dekhna hoga isliye function hai
let statsOfAPath= fs.lstatSync("f1.txt");
console.log("stats", statsOfAPath); // yeh pura stats dega jaise kitna time hua, size n all
console.log("isFile?", statsOfAPath.isFile()); //file hai ya nhi 
console.log("isDirectory?", statsOfAPath.isDirectory()); // directory hai ya nhi

//jo yeh path hai usme content kya kya hai uske liye, content means iss path pe jo files, folders hai woh dega
let address= "D:\\Web Dev\\JS\\Getting Started\\Module_1"
let content= fs.readdirSync(address);
console.log("Directory Content",content); // content of the directory

=====================================================================================================================================
    //file copy karne keliye
    
let path= require("path");
let fs= require("fs");

 //file copy karne keliye
// isme as a input aapko firstParameter mai dena hota hai srcFilePath (source file ki path means woh abhi kaha hai), destFilePath (kahape dalni hai woh path)
let srcFilePath= "D:\\Web Dev\\JS\\Module_1\\myDirectory\\myfile.txt";
let destDir= "D:\\Web Dev\\JS\\Module_1\\fs_organiser\\Examples";
let tobeCopiedFileName= path.basename(srcFilePath);
let destPath= path.join(destDir, tobeCopiedFileName); //jo file name hai usko destination directory ke andar copy karna hai so join kiye
//console.log(tobeCopiedFileName); // jo file copy hone ja rhi hai uska nam dega
fs.copyFileSync(srcFilePath, destPath);
console.log("File Copied");
