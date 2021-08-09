//hume isme data mangana hai
// npm i request
let request= require("request");
console.log("Before"); //request karne se pehle
request('http://www.google.com' , cb); //yeh request bhi async tarike se kam krti hai coz hume nhi pta google kahase kitni der mai ayega. so yaha tum data pass karo aur agla call back pass karo 
function cb(error, response, html) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    if( error){
        console.log(error); //agar error hai to erro print krdo
    }else if(response.statusCode == 404){ //agar hume response aa rha hai aur uska status code 404 hai 
        console.log("Page Not Found");
    }
    else{
        //console.log(html); isse pura google ka html code ajayega
        console.log("html:", ) 
    }
  }
  console.log("After");

**************
//humare pas jo html code aya usme dhundna boht difficult hai
//so tumhe data extract karna hai to humare pas hoti hai cheerio

// npm i request
const { Cheerio } = require("cheerio");
let request= require("request");
let ch
//data extract-> cheerio
console.log("Before"); //request karne se pehle
request('https://www.npmjs.com/package/cheerio' , cb); //yeh request bhi async tarike se kam krti hai coz hume nhi pta google kahase kitni der mai ayega. so yaha tum data pass karo aur agla call back pass karo 
function cb(error, response, html) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    if( error){
        console.log(error); //agar error hai to erro print krdo
    }else if(response.statusCode == 404){ //agar hume response aa rha hai aur uska status code 404 hai 
        console.log("Page Not Found");
    }
    else{
       // console.log("html:", ) 
       dataExtractor(html)
    }
  }

  function dataExtractor(html){ //so yeh humne banaya hua function hai
    let searchTool= cheerio.load(); //cheerio mai load function mai hum apni html dete hai fir woh ek search ka tool deta hai
    //load function wahi hai tumhar pure page mere dhund ke la skta hai
    let elemRep= searchTool("#readme>h1"); //this tool works like tum isme apne css ke selectors pass karo aur woh tumhe element lake dega
    //text nikalne keliye
    let moduleName= elemRep.text().trim(); //aage piche kuch spacing hogi isliye trim karenge
    console.log("modulename", moduleName);
}
  console.log("After");

/*
1. so apko jist website se chize scrap krni hai uspe request lagayenge fir uska data dataExtractor(html) mai ayega fir function call karenge fir woh hume searchtool dega 
*/

