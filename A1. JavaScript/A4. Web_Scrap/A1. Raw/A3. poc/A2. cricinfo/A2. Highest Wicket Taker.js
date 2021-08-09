//isme hume bowlers ke nam nikalne hai aur fir hume unke wicket ke basis pe, highest wicket taker ka nam aur wickets nikalna hai
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
    //console.log(bowlerTables.length); // 2 hi tables hai
    // let htmlData= "";
    // for(let i=0; i< bowlerTables.length; i++){
    //     //html function sara content lake deta hai
    //     htmlData += searchTool(bowlerTables[i]).html(); //htmlData mai append krte jayenge
    // }
    // fs.writeFilSync("table.html", htmlData);
    //upar wala commented code bas table dikhane keliye ha
    
    //har ek bowler se uska name aur wickets nikalni hai
    //loop
    //name
    let bowler= "";
    let hwt= 0;
    for(let i=0; i< bowlers.length; i++){
        let cols =searchTool(bowlers[i]).find("td"); //column nikal liye
        let name= searchTool(cols[0]).text();
        let wickets= searchTool(cols[4]).text();
        console.log(name+" "+wickets);
        if( wickets >= hwt){    //wickets : just compare karo aur highest wicket taker nikalo
            bowler= name;
            hwt= wickets;
        }
    }
    console.log(bowler+" "+wickets);


}
console.log("After");

/* 
1. pehle table ko detect kiya fir run karke dekh name wickets konse column mai hai
*/
