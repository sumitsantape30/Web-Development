var http = require('http');
http.createServer(function(req, res){
    res.write("Hello nodemon ") //us ko dot ki help se uppercase ke functions dekhe ja skte hai 
    res.end();
}).listen(4000)

//problem: yeh string ko change ki to yeh code firse run karega sirf refresh kiya to changes reflect nhi karenge.
//so yeh problem overcome krne keliye npm i --save-dev nodemon
//fir hum ise nodemon ke through run karenge
// nodemon A8.js
