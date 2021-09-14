//assume karo lib.js yeh code humara nhi hai, agar lib.js code mai kuch galtiya hogi jiski wajah se humare isme problems ho skti hai, woh chiz hai yeh 

// manlo humare pas library hai jo analyze data wale kam krte hai 
let libObj = require("./lib");
let amount = 100;
let priceOfProd = 20;
// yahatk code execution humare pas thi fir iske bad execution chali jati hai analyzeData ke pas chala gya 
libObj.analyzedata("TV", cb); //data analyse karne ke bad callback chalega. 
function cb() { //analyzedata function apne andar cb kitni bar bhi call kr skta hai woh uske hath mai hai 
    // credit card payment 
    amount = amount - priceOfProd; //product ki price minus kr rhe hai 
    console.log(amount);
}
// yahatk code chalaye to woh 80 60 40 20 0 print karta hai, humko data analyze karna tha but uss library mai kuch galti hai aur usne tumhare cb ko multiple times call kardiya 

//humne promisified function call kiya ispe
let promiseP = libObj.promisifiedAnalyzedata("TV");
promiseP.then(cb); //ab uss code mai resolve hua to cb chal jata hai 


