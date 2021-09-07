//what is promises? Jab hum burger king mai jate hai to age wala banda hume token deta hai so woh token is promise, promise ki tumhne pay kiya hai to tumhe burger mil jayega
//so burger king wala banda is promise provider, aur hum unsko payment kisi bhi tarah kr skte hai so hum decide krte hai kya input dena hai aur hume burger milega ya humare payment wapas milega yah woh samne wala banda decide krta hai issi behaviour ko mirror karne keliye promises hai
// let promise= fs.prmise.readFile(); so yeh dene wala decide krta hai ki input kya doge promise lene keliye aur in future woh promise kya value dega
// so woh promises resolve hojate hai or break hojate hai but initially woh pending rehte hai, so yeh states hai promises ki

let fs = require('fs');

/*
console.log("Before");
// this is call back way of doing async tasks
fs.readFile("f1.txt", function cb(err, data) {
    console.log("data " + data);
})
console.log("After"); */

//another way
console.log("Before");
//fs ke pas promised based ek function hai, yeh bhi same output deta hai but instead of passing any call back file pass krdete ho
let freadPromise = fs.promises.readFile("f1.txt"); //fs.promises.readFile yeh decide krta hai ki in future freadPromise ke andar kya value ayegi, woh issue resolve hoga ya nhi

//console.log("promise", freadPromise); // yeh pending print karega coz humara promise abhi pending hi hai 
//agar apka promise resolve hojayega to apka data iss call back mai dala jayega 
// function pass -> resolve 
freadPromise.then(function cb(data) { //agar promise fulfil hua to yeh then wala part chalega and yeh function call hoga aur sathme data ajayega
    console.log("data " + data);
})

//agar promise resolve nhi hua to, reject hogya 
// function pass -> reject , agar error ajaye to 
freadPromise.catch(function cb(err) {
    console.log("error " + err);
})

console.log("After");
