* Child Process:
   let cp= require("child_process");
   1. cp.execSync("calc");  // to open the calculator or website or any file
   2. cp.execSync("start chrome https:\\www.pepcoding.com"); // to open any website

* File System 🤸‍♂️
  let fs= require("fs");
   1. let content= fs.readFileSync("f1.txt") // to read the content of any file
      // yeh jo content ayega wog buffer format mai rahega usme aap + append karke string mai convert kr skte ho
   2. fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai"); // agar yeh file already exist nhi krti to yeh new file bana dega aur usme yeh content dal dega. aur agar already exist       krti hai to uska content change karke yeh input wala content dal dega
   3. fs.appendFileSync("abc.txt", " we are one"); // yeh bhi wahi kam karega. agar file already exist krti hai to uss file ke content ke sath yeh wala content append kardega,          agar file exist nhi krti to new file create karega aur usme yeh content dal dega
   4. fs.unlinkSync("abc.txt"); // file delete karne keliye
   5. console.log(process.argv.slice(2)); // to take the user input, Node fs.js yeh do chize kam ki nhi hoti isliye slice krte hai
   6. //agar path aur command sathme input aye to unko separate karne keliye
      let inputArr= process.argv.slice(2);
      let cmd= inputArr[0];
      let path= inputArr[1];

      console.log("cmd:"+cmd);
      console.log("path: "+path);
