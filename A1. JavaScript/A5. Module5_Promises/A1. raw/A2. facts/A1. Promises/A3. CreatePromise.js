*Firstly checkout the code in google doc then dry run them, then come here

//promises hum khud bana bhi skte hai 
// muje myPromisiedFsReader iss function ko aise build karna hai taki yeh promise ki tarah kam kare
// jaise fs.promise.readFile kam krta tha waisehi myPromisiedFsReader iss function ko likhna chahte hai

// /implement -> polyfill 
// fs.promises.readFile ka humne polyfill likha hai
let fs = require("fs");
function myPromisiedFsReader(filePath) {
    // using this existing function
    return new Promise(function (resolve, reject) { //agar apko khudka promises bade function return/create karna hai to usko hum return new Promise ke andar put kardete hai
        fs.readFile(filePath, function cb(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data)
            }
        })

    })
}

// consumer 
console.log("Before");
let freadPromise = myPromisiedFsReader("f1.txt");
console.log("promise", freadPromise);
// promise -> resolve -> data 
// function pass -> resolve 
freadPromise.then(function cb(data) {
    console.log("data " + data);
})
// function pass -> reject 
freadPromise.catch(function cb(err) {
    console.log("error " + err);
})
console.log("After");
