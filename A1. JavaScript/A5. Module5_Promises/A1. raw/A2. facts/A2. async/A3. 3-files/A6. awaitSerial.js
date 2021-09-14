// files ko read karke print karna hai

let fs = require("fs");
// syntax sugar 
console.log("before");
// async is keyword 
(async function fn() {
    
    try {
        let ffReadPromise = fs.promises.readFile("f1.txt");
        let content = await ffReadPromise; //await kiya to yeh sidha data lake de dega aur hum usko content mai store kr rhe hai
        console.log("content" + content);
        let SfReadPromise = fs.promises.readFile("f2.txt"); //12 and 13 line yeh hai cb1 ka code (cb1 of A5. PromiseAsyncSerial.js file)
        content = await SfReadPromise;
        console.log("content" + content);
        let thfReadPromise = fs.promises.readFile("f3.txt"); // line 15 and 16 hai cb2 ka code
        content = await thfReadPromise;
        console.log("content" + content);
    } catch (err) {
        console.log("err", err);
    }

})();
console.log("after");

//yaha kam same hi hai bas likhne ka easy tarika hai
//then and catch ka alternative hai yeh
