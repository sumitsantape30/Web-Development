let request= require("request");
let ch  = require("cheerio");
const { fstat } = require("fs");
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
    let bowlers= searchTool(".table.bowler tbody tr"); 
   
    for(let i=0; i< bowlers.length; i++){
       
        let cols= searchTool(bowlers[i].find("td"));
        let aElem= searchTool(cols[0]).find("a")
        let link= aElme.attr("href");
        // agle page pe jana hai to uski link get karna padega
        let fullLink= `https://www.espncricinfo.com/${link}`;
        //console.log(fullLink);
        request(fullLink, newcb);
    }

}

function newcb(error, response, html){
    if( error){
        console.log(error); 
    }else if(response.statusCode == 404){
        console.log("Page Not Found");
    }else{
        console.log(html) //print the html for the request made
        console.log("````````````");
        //dataExtractor(html)
        getBirthday(html);
     }
}

function getBirthday(html){
    let searchTool= cheerio.load(html);
    let headingArr= searchTool(".player-card-description");
    let age= searchTool(headingArr[2]).text();
    let name= searchTool(headingArr[0]).text();
    console.log(name," ", age);
}

console.log("After");
