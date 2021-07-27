
// agar import karna hai to same require keyword use hoga
//require mai aap file ka path require krte homedir
let libExportedObject= require("./lib"); //require ke help se lib file code yaha import hua
console.log("I am client File");
console.log(libExportedObject.varName);
console.log(libExportedObject.fxn());

Output:
I am client File
10
Hello I an fn
Hello
