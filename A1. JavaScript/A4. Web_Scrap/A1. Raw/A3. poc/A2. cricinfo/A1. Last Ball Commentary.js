//hume input mai ek url milega crickinfo ke site ka, hume last ball pe kya commentary hui thi yeh return karna hai
//request wala hi code yha paste karo, code same hi rehne wala hai bas url alag se dena hai

// npm i request
let request= require("request");
let ch  = require("cheerio");
//data extract-> cheerio

let url= "https://www.espncricinfo.com/series/ipl-2020-21-1210595/sunrisers-hyderabad-vs-royal-challengers-bangalore-3rd-match-1216534/ball-by-ball-commentary";

console.log("Before"); 
request(url, cb);  //isme url pass karenge
function cb(error, response, html) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('body:', body); // Print the HTML for the Google homepage.
    if( error){
        console.log(error); 
    }else if(response.statusCode == 404){
        console.log("Page Not Found");
    }
    else{
       // console.log("html:", ) 
       dataExtractor(html)
    }
  }

  function dataExtractor(html){ 
    let searchTool= cheerio.load(); 
    //you can't get unique selectors always
    let elemRepArr= searchTool(".match-comment-wrapper .match-comment-long-text"); //hume bas searchtool ke andar selector pass karna hai, aur element representative mil jayega. hume waha koi bhi unique elector nhi mila so woh array deta hai coz multiple chize mili hai
   // console.log(elemRepArr.length);
   //cram this-> jab apko iss searchTool se array mil rha hota hai, so aap is array ke kisi element ko access krte ho to apke paske sare functiona kho jate hai to apko dubara isko searchTool ke andar pass karna pdta hai
   let lbc= searchTool(elementArr[0]).text();
   console.log("last ball commentary", lbc);
}
  console.log("After");
