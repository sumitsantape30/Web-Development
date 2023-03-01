var http = require('http'); //yeh node ka predefined module hai
//yeh request send and accept krne mai help krta hai

//http.createServer().listen(3900);//isse server create hoga jispe aapki application run horhi hogi. isme aap API rakh skte ho fir jo client hoga woh ise access kr skta hai
//3900 port number pe ek humara server bana hua hai

/*
http.createServer(function(req, res){//abhi koi request nhi hai hum sidha response display karenge
    res.write("Hello");
    res.end();
    //humne bas response display kiya hai client ko
}).listen(3900); */

/*
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'application\json'})
    res.write('{"name":"anil"}'); //response mai mujhe yeh data ayega so apni API hai yeh ek
    res.end();
}).listen(3900) */

//agar jada data hai to array banake pass kr skte ho
var data = [{name:"Sumit",age:"20",email:"sumitsantape@gmail.com"},
            {name:"Ankita", age:"23",email:"ankitasantape@gmail.com"},
            {name:"Ankita", age:"23",email:"ankitasantape@gmail.com"},
            {name:"Ankita", age:"23",email:"ankitasantape@gmail.com"},
            {name:"Ankita", age:"23",email:"ankitasantape@gmail.com"}
]
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'application\json'})
    res.write(JSON.stringify(data)); //yeh string data hi leta hai so stringify it
    res.end();
}).listen(3900)

/*The above Node.js code is creating a server using the built-in HTTP module of Node.js. The server listens on port 3900 and serves JSON data.

The JSON data is an array of objects containing information about people, including their name, age, and email. The server sends this data as a response to any HTTP request it receives. The res.writeHead() method is used to set the HTTP status code to 200, which means the request was successful.

The res.write() method is used to write the JSON data to the response stream, and the JSON.stringify() method is used to convert the JavaScript array to a JSON string. Finally, the res.end() method is used to close the response stream.*/