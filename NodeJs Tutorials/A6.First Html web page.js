//Make First Html web page: isme button dalni hai html wali

/*
var http = require('http');
http.createServer(function(req, res){
   // res.write("<input type='text' />"); hume input lena hai but yeh normal text print karega. hume btana pdta hai ki aap iss text ko html mai convert karo
    res.writeHead(200, {'Content-Type' : "text/html"}) //hume btana hota hai ki content type html hai
    res.write("<input type='text' />");
    res.end();
}).listen(4000) */

//pura html res.write mai pass nhi kr skte so ek variable bana lenge
var http = require('http');
//pure html ko iss page variable mai dal denge
var page= `
<h1> Hello NodeJs </h1>
<br>
<input type='text' /> <br> <br>
<input type='text' /> <br> <br>
<input type='text' />`
http.createServer(function(req, res){
   // res.write("<input type='text' />"); hume input lena hai but yeh normal text print karega. hume btana pdta hai ki aap iss text ko html mai convert karo
    res.writeHead(200, {'Content-Type' : "text/html"}) //hume btana hota hai ki content type html hai
    res.write(page);
    res.end();
}).listen(4000)
