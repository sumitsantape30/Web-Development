//hume input mai ek url milega crickinfo ke site ka, hume last ball pe kya commentary hui thi yeh return karna hai
//request wala hi code yha paste karo, code same hi rehne wala hai bas url alag se dena hai

// npm i request
let request= require("request");
let cheerio  = require("cheerio");
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
    let searchTool= cheerio.load(html); 
    //you can't get unique selectors always
    let elemRepArr= searchTool(".match-comment-wrapper .match-comment-long-text"); //hume bas searchtool ke andar selector pass karna hai, aur element representative mil jayega. hume waha koi bhi unique selector nhi mila so woh array deta hai coz multiple chize mili hai
   // console.log(elemRepArr.length);
   //cram this-> jab apko iss searchTool se array mil rha hota hai, so aap is array ke kisi element ko access krte ho to apke paske sare functions kho jate hai to apko dubara isko searchTool ke andar pass karna pdta hai
   let lbc= searchTool(elementArr[0]).text();
   console.log("last ball commentary", lbc);
}
  console.log("After");

//=============================== YT =====================================================================
let request= require("request");
let cheerio= require("cheerio");
let url= "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
console.log("Before");
request(url, cb);
console.log("After");

function cb(error, response, html){

    if(error){
        console.log("error: "+error);
    }else if( response.statusCode == 404){
        console.log("Page Not Found");
    }else{
        dataExtractor(html);
    }
}

function dataExtractor(html){

    let searchTool= cheerio.load(html);
    let commentArr= searchTool(".match-comment-long-text>p");
    let text= searchTool(commentArr[1]).text();
    let htmlData= searchTool(commentArr[1]).html();

    console.log("Text data: "+text);
    console.log("HTML Data: "+htmlData);

}

Output:
before
After
Text data: Kane Williamson: It was a tough game. It was always gonna be against a class side like RCB. With the quality of their batting, restricting them to 132 said 1) we bowled well, 2) it wasn't going to be easy. It was a challenge to restrict them. We had time, but with two world class legspinners it was never going to be easy. We had to try and get through their spells and they didn't give us much at all. It was just nice that we could get through their overs without losing too many wickets. You try and do your role as well as you can. Batting at 4, it can vary a lot, and surface dependent. It was nice to spend time and make a contribution, put some partnerships together. It's been an interesting last two weeks for us. [Holder] is cooler than me! He's playing beautifully.
HTML Data: <b>Kane Williamson:</b> It was a tough game. It was always gonna be against a class side like RCB. With the quality of 
their batting, restricting them to 132 said 1) we bowled well, 2) it wasn't going to be easy. It was a challenge to restrict them. We had time, but with two world class legspinners it was never going to be easy. We had to try and get through their spells and they didn't give us much at all. It was just nice that we could get through their overs without losing too many wickets. You try and do your role as well as you can. Batting at 4, it can vary a lot, and surface dependent. It was nice to spend time and make a contribution, put some partnerships together. It's been an interesting last two weeks for us. [Holder] is cooler than me! He's playing beautifully. <br><br>
