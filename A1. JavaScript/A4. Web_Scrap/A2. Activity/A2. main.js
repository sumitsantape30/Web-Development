let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"; 
let request = require("request");
let cheerio = require("cheerio");
let scoreCardObj=require("./scoreCard") //isko sabse last mai getAllScoreCardLink iss function keliye import karenge
// myTeamName	name	venue	date	opponentTeamName	result	runs	balls	fours	sixes	sr
request(url, cb);
function cb(error, response, html) {

    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); // Print the HTML for the request made 
        dataExtracter(html);
    }
}
function dataExtracter(html) {
    let searchTool = cheerio.load(html);
    let anchorrep = searchTool('a[data-hover="View All Results"]'); //hume view all result pe jana hai so woh selector liya
    let link = anchorrep.attr("href"); //anchor hata diya aur yahase link mil jayega, yeh adhura link hai so isko full link mai convert karo, so home page ke link ke bad isko append kardo
    // console.log("link",link);
    let fullAllmatchPageLink
        = `https://www.espncricinfo.com${link}`;
    console.log(fullAllmatchPageLink);
    //  go to all match Page so uske liye request kar denge
    request(fullAllmatchPageLink, allMatchPageCb);
}

function allMatchPageCb(error, response, html) {
    if (error) {
        console.log(error); // Print the error if one occurred
    } else if (response.statusCode == 404) {
        console.log("Page Not Found")
    }
    else {
        // console.log(html); //will print the HTML code for the request made 
        getAllScoreCardLink(html); //hume ab score card ki link get karna hai
    }
}
function getAllScoreCardLink(html) { //humare html code aya isme se hume link nikalni hai
    console.log("```````````````````````");
    let searchTool = cheerio.load(html); //searchTool == $ dono same hi hai
    let scorecardsArr = searchTool("a[data-hover='Scorecard']"); //sabhike link apne pas aagye
    for (let i = 0; i < scorecardsArr.length; i++) {
        let link = searchTool(scorecardsArr[i]).attr("href");
        //console.log(link); yeh sabhike links print karega
        let fullAllmatchPageLink= `https://www.espncricinfo.com${link}`;
        console.log(fullAllmatchPageLink); //sare humne link nikal liye ab hume inke help se scorecard pe jana padega
        scoreCardObj.psm(fullAllmatchPageLink); //ab sabka data ajyega humare pas

    }
    console.log("`````````````````");
}
