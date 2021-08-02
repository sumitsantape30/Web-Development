// 1- node wcat.js filepath => displays content of the file in the terminal 
// 2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (contactinated form) in the given order.
let fs = require("fs");
let inputArr = process.argv.slice(2);
//console.log(inputArr);

let filesArr= inputArr;

for (let i = 0; i < filesArr.length; i++) {
    let ans = fs.existsSync(filesArr[i]);
    if (ans == false) {
        console.log("File doesn't exist");
        return;
    }
}

let content = "";
for (let i = 0; i < filesArr.length; i++) {
    let cFileContent = fs.readFileSync(filesArr[i])
    content = content + cFileContent + "\n";
}
console.log(content)

//==============================================================================================================
