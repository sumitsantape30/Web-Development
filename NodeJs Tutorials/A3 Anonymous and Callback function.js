//Anonymous Function and callback function
var http = require('http');
http.createServer(function(req, res){
    res.write("Hello from nodejs server");
    res.end();
}).listen(5000);
//iske andar ka function is callback function. and yeh anonymous function bhi hai coz it doesnt have any function name
//callback function: jab mai koi function mai usme parameter pass krke andar se call krlete hai to callback function hota hai


function sum(a, b){//this function has name.
    return a+b;
}

console.log(sum(10, 20));

var sum = function(a, b){ //this function doesnt have name, this is anonymous function
    return a+b;
}

console.log(sum(10, 20));

//callback function
var add = function(a, b){
    return a+b;
}

function complexExp(add){
    console.log('this')
    console.warn(add(200, 300));
}

//complexExp(add);
complexExp(function(a, b){//pehle yeh complexExp call hua then upar wala function chala, then uparwale function mai add call hua to yeh this2 wala run hua
    console.log('this2')
    return a+b;
})
