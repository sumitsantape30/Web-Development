// This code prooves points of promisesfacts.md:> Promise => assurance of a work that could be completed in future.
// promise-> initial state-> pending, value -> undefined final state-> settled resolved -> you have got the future value rejected-> error
// Open book and google doc for theory and better understanding

let fs = require("fs");
function myPromisiedFsReader(filePath) {
    // using this existing function
    return new Promise(function cb(resolve, reject) {
        // console.log("8")
        fs.readFile(filePath, function cb(err, data) {
            // console.log("10")
            if (err) {
                reject(err);
            }
            else {
                // console.log("15")
                resolve(data)
            }
        })
        // console.log("9");
    })

}

//yahase code run hoga
console.log("Before");
let fileReadPromise = myPromisiedFsReader("f1.txt");
// state -> pending 
console.log("24", fileReadPromise); //yaha 24 pending print hoga coz upar se pending promise return hua hai
// 1sec -> async (1sec)
// setTimeout(function () {
//     console.log("11", fileReadPromise);
// }, 1000);

// function call -> then is synchronous 
// this proves 5th point, cb functions passed inside then and catch are async
function scb(data) {// this will always run async
    console.log("hello", data); //yeh sabse last mai print hoga
    // return new Error("This is a error");
return undefined;
}

// console.log("33");
// let thenNpromise = fileReadPromise.then(scb) // thenNPromise wahi value store karege jo scb return karega. Jis prmise pr aap atach hue ho uske uske call back ke dware di gyi value thenNpromise mai store hogi
// he promise returned from that then depends upon the cb function inside that then. final state of promise returned from then/catch depends upon value returned from there cb => if cb returns then your promise will resolve into val=>val nothing=> undefined Error-> error Promise-> promise
fileReadPromise.then(scb).then(scb2); //promise ko consume karne keliye tumhare pas set timeout ki jagah fileReadPromise hota hai aur yeh then function call hai, then is a synchronus function

// catch wala case niche hai

function scb2(data) {
    console.log("42", data);
}

// setTimeout(function () {
//     console.log("41", thenNpromise)
// }, 2000);
// thenNPromise -> rules
// function fcb(err) {
//     console.log("hello", err);
// }
// fileReadPromise.catch(fcb); //apke pas jo promise hai uske upar catch laga doge to wobhi apna failure wala call back chal jayega
// console.log("35")

console.log("after");
