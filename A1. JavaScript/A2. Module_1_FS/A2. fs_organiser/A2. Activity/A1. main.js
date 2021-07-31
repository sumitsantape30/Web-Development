// main input
//  input -> node main.js tree "path"
// Print-> tree command executed with path ""
// Print -> organize command executed with path ""
//  input -> node main.js help 

 // Print -> list of all the commands
            // 1. node main.js tree "path"

            // 2. node main.js organize "path"
            // 3. node main.js help
//==========================================================================================================================
  
let helpObj = require("./command/help");
let treeObj = require("./command/tree");
let organizeObj = require("./command/organize");

let inputArr = process.argv.slice(2);
let command = inputArr[0];

switch (command) {
        case "tree":
        //Input ayega:  node main.js tree "D:\Web Dev\JS\Module_1\Random Folder"
            treeObj.treefxn(inputArr[1]);
            break;
        case "organize": // input: node main.js organize "D:\Web Dev\JS\Module_1\Random Folder"
            organizeObj.organizefxn(inputArr[1])
            break;
        case "help":
            helpObj.helpfxn();
            break;
        default:
            console.log("🙏 kindly enter the correct cmd");
            break;
} 
