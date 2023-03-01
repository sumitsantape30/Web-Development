//NPM- node package manager
//kuch extra kam krne keliye apko kuch library lag skti hai like mail send krna hai, excel, pdf generate krni hai

var http = require('http');
var uc = require('upper-case'); //yeh package install kiya ab require kiya

http.createServer(function(req, res){
    res.write(uc.upperCase("node webpage")); //us ko dot ki help se uppercase ke functions dekhe ja skte hai 
    res.end();
}).listen(4000)

//to install package: npm i upper-case
//to uninstall package: npm uninstall upper-case