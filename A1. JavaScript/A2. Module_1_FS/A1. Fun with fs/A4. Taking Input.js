console.log(process.argv.slice(2)); // input lene keliye yahape argv hota hai, iski pehli 2 chize kam ki nhi hoti isliye slice krdete hai

Output:
PS D:\Web Dev\JS\Getting Started\Module_1> Node fs.js How are you? //isliye slice kiye taki Node fs.js yeh 2 words chuut jaye
[ 'How', 'are', 'you?' ]

=================================================================================================================

// agar input mai kisine koi command aur path dedi to seperate kaise kare?
let inputArr= process.argv.slice(2);
let cmd= inputArr[0];
let path= inputArr[1];
console.log("cmd", cmd);
console.log("path", path);
// so iss tarike se seperate kr skte ho

Output:
PS D:\Web Dev\JS\Getting Started\Module_1> Node fs.js Tree D:\Web\Dev\JS\Getting Started\Module_1\fs.js
cmd Tree
path D:\Web\Dev\JS\Getting

.........................................................................................................................
// cwd : current working directory
let currentPath= process.cwd(); // current path of the directory
console.log("CurrentPath", currentpath);

.....................................................................................................................
