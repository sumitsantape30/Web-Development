var http = require('http'); //node ka package hai http jo hyper text transfer protocol. request ko send and accept krne keliye help krta hai.
//request means jab hum koi website google krte hai to it send request to the server. and site open hone ke bad jo interface ata hai that's response

http.createServer(function(req, res){
res.write("Hello from nodejs server");
res.end();
}).listen(5000);
//iss 5000 server ban gya