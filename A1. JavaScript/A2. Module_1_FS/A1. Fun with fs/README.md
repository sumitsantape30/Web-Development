* <h3> Child Process: </h3>
   <br>let cp= require("child_process");
   
   1. cp.execSync("calc");  // to open the calculator or website or any file
   2. cp.execSync("start chrome https:\\www.pepcoding.com"); // to open any website

* <h3>File System 🤸‍♂️</h3>
   <br>let fs= require("fs");
   
   1. let content= fs.readFileSync("f1.txt") // to read the content of any file. yeh jo content ayega wog buffer format mai rahega usme aap + append karke string mai convert kr skte ho
   2. fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai"); // agar yeh file already exist nhi krti to yeh new file bana dega aur usme yeh content dal dega. aur agar already exist       krti hai to uska content change karke yeh input wala content dal dega
   3. fs.appendFileSync("abc.txt", " we are one"); // yeh bhi wahi kam karega. agar file already exist krti hai to uss file ke content ke sath yeh wala content append kardega,          agar file exist nhi krti to new file create karega aur usme yeh content dal dega
   4. fs.unlinkSync("abc.txt"); // file delete karne keliye
   5. console.log(process.argv.slice(2)); // to take the user input, Node fs.js yeh do chize kam ki nhi hoti isliye slice krte hai
   6. //agar path aur command sathme input aye to unko separate karne keliye
         <br> let inputArr= process.argv.slice(2);
         <br> let cmd= inputArr[0];
         <br> let path= inputArr[1];
         <br> console.log("cmd:"+cmd);
         <br> console.log("path: "+path);
   7. let currentPath= process.cwd(); // abhi hum currently konse path pe kam kr rhe hai woh path deta hai 

* <h3>File System (Directory) </h3>
   <br>let fs= require("fs");
    
   1. fs.mkdirSync("myDirectory"); //mai abhi jis location pe hu wahape myDirectory nam ka folder ban jayega
   2. fs.writeFileSync("myDirectory/myfile.txt", "my content"); //maine abhi jo directory banayi MyDirectory uske andar myfile nam ki file create kr rhe hai aur usme content dal rhe hai "my Content".
   3. let filesArr= fs.readdirSync("myDirectory"); //myDirectory folder ke andar jinti bhi files hai unka array return kardega
   4. uss folder ki sari files remove karne keliye
    <br> for(let i=0; i< filesArr.length; i++){
   <br> console.log(filesArr[i]+ " is removed");
    <br> fs.unlinkSync("myDirectory/"+filesArr[i]);
<br>} 
   5. fs.rmdirSync("myDirectory"); // agar directory remove karna hai to
   6. let doesExist= fs.existsSync("D:\\Web Dev\\Practice\\Fs_Practice\\funwithfs"); // yeh path exist krti hai ye nhi yeh dekhne keliye
   7. //so jab input mai path ayega hume dekhna hoga ki yeh input mai ayi path ek file ki yafir folder ki path hai yeh dekhna hoga isliye function hai
    <br>let statsOfAPath= fs.lstatSync("f1.txt");
    <br>console.log("stats", statsOfAPath); // yeh pura stats dega jaise kitna time hua, size n all
    <br>console.log("isFile?", statsOfAPath.isFile()); //file hai ya nhi 
    <br>console.log("isDirectory?", statsOfAPath.isDirectory()); // directory hai ya nhi
   8. //agar hume directory ki path mili hai aur hume dekhna hai usme konsi konsi files exist krti hai
     <br>let address= "D:\\Web Dev\\JS\\Getting Started\\Module_1"
     <br>let content= fs.readdirSync(address);
     <br>console.log("Directory Content",content); // directory ke andar jitni bhi files hai uska array print karwa dega

* <h3>File System(Path)</h3>
   let path= require("path");
    <br>let fs= require("fs");
     
  1. To copy the files
     <br> //file copy karne keliye
     <br> // isme as a input aapko firstParameter mai dena hota hai srcFilePath (source file ki path means woh abhi kaha hai), destFilePath (kahape dalni hai woh path)
     <br>let srcFilePath= "D:\\Web Dev\\JS\\Module_1\\myDirectory\\myfile.txt";
     <br>let destDir= "D:\\Web Dev\\JS\\Module_1\\fs_organiser\\Examples";
     <br>let tobeCopiedFileName= path.basename(srcFilePath);
     <br>let destPath= path.join(destDir, tobeCopiedFileName); //jo file name hai usko destination directory ke andar copy karna hai so join kiye
     <br>//console.log(tobeCopiedFileName); // jo file copy hone ja rhi hai uska nam dega
     <br>fs.copyFileSync(srcFilePath, destPath);
     <br>console.log("File Copied");
   2. // agar koi folder ke andar koi file banai karni hai, input mai file ka name aur content ayega
    <br> let inputArr= process.argv.slice(2);
    <br> let fileName= inputArr[0];
    <br> let content= inputArr[1];
    <br> console.log("FileName: ",fileName);
    <br> console.log("Content: ", content);
    <br> let currentPath = process.cwd(); //abhi aap konse folder ke andar ho 
    <br> //path -> paths -> platform Independent
    <br> let filePath= path.join( currentpath, "dir1", fileName); // currentPath ke andar dir1 folder banage aur usme file
    <br> console.log("filePath", filePath);
    <br> fstat.writerFileSync("filePath", "content");
   3. // agar file ka extension name chahiye
     <br>// __dirname matlab current path aur usme abc.js join kr rhe hai
     <br>let ext= path.extname(path.join(__dirname, "abc.js"));
     <br>console.group("ext", ext);
   4. //basename
     <br>// agr humari boht badi path hai aur last mai file name hai to woh apko file ka name de dega aur agar folder hai to folder ka name de dega
     <br>let name= path.basename(__dirname); // yeh current path mai jo sbse last mai folder ka name hoga wohdega
     <br>console.log(name);
     <br>//agar iske last mai kisi file ka nam dedu to file dega
     <br>name= path.basename(path.join(__dirname, "abc.js")); //humne currentPath mai abc.js ko join kiya
     <br>console.log(name);


      
